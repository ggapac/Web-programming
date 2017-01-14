/**
 * TasksController
 *
 * @description :: Server-side logic for managing Tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/**
	 * @api {get} / Tasks page - TO DOs
	 * @apiName Tasks page
	 * @apiDescription Opens tasks page, first page the User sees, when he/she logs in.
	 * @apiGroup Tasks
	 * @apiPermission signed in
	 * @apiParam {Integer} userid Id of the User.
	 */
	index: function (req, res) {
    User.findOne({
			userid: req.session.userid
		})
    .populate('tasks', {
      where: {
        status: 0
      }
    })
    .populate('tags')
    .exec(function(err, user) {
      if (err) {
				req.session.message = ["Error 500: cannot find user"];
				sails.log.error("Index: Cannot find user, error: " + err);
			}
      if (user.length == 0) {
				sails.log.warn("Index: Cannot find user.");
			}
      else {
        var message = "";
        if (req.session.message != null) {
          message = req.session.message;
          delete req.session.message;
        }
				// check user's preferences
        if (user.tasksperday == 0) {
					sails.log.info("Successfully shown tasks page.");
          return res.view('tasks', {
            othertasks: user.tasks,
            tags: user.tags,
            messages: message,
            admin: req.session.admin
          });
        }
        else {
          user.tasks.sort(function(a,b) {
            return (new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
          });
          user.tasks.sort(function(a,b) {
            if (new Date(a.deadline) == new Date(b.deadline)) {
              return (b.priority - a.priority);
            }
          })

          if (user.tasks.length <= user.tasksperday) {
						sails.log.info("Successfully shown tasks page.");
            return res.view('tasks', {
              dailytasks: user.tasks,
              tags: user.tags,
              messages: message,
              admin: req.session.admin
            });
          }
          else {
            daily = user.tasks.slice(0, user.tasksperday);
            other = user.tasks.slice(user.tasksperday, user.tasks.length);
						sails.log.info("Successfully shown tasks page.");
            return res.view('tasks', {
              dailytasks: daily,
              othertasks: other,
              tags: user.tags,
              messages: message,
              admin: req.session.admin
            });
          }
        }
      }
    });
  },
	/**
	 * @api {post} /newtask Add Task
	 * @apiName New Task
	 * @apiDescription Creates a new task for the User.
	 * @apiGroup Tasks
	 * @apiPermission signed in
	 * @apiParam {Integer} userid Id of the User.
	 * @apiParam {String} description Short description of the task.
	 * @apiParam {Integer} priority Priority rate of the task, a number from 1 to 5.
	 * @apiParam {String} deadline Deadline date in format dd.mm.yyyy.
	 * @apiParam {String} tag Task tag.
	 */
	addTask: function(req, res) {
    var date = req.body.deadline;
		var day = date.substring(0,2);
		var month = date.split(3,5);
		var year = date.split(6,10);

		//check date
    var deadline = date.split(".").reverse().join("-");

    Tasks.create({
      name: req.body.taskname,
      description: req.body.description,
      priority: req.body.priority,
      deadline: deadline,
      user: req.session.userid,
      tag: req.body.tag
    }).exec(function(err2, task) {
      if (err2) {
				req.session.message = ["Error 500: cannot make task."];
        sails.log.error("Add task: cannot make task, error: " + err2);
				return res.redirect('/');
      }
			sails.log.info("Successfully added new task, taskid: " + task.taskid);
      return res.send({task: task});
    });
  },
	/**
	 * @api {get} /task/:id Task Info
	 * @apiName Task Info
	 * @apiDescription Shows additional information about the chosen task.
	 * @apiGroup Tasks
	 * @apiPermission signed in
	 * @apiParam {Integer} taskid Id of the Task.
	 * @apiParam {Integer} tagid Id of Task's Tag.
	 */
  taskInfo: function(req, res) {
    Tasks.findOne({
      taskid: req.params['id']
    }).exec(function(err, task) {
      if (err) {
				req.session.message = ["Error 500: cannot get task info."];
        sails.log.error("Task info: cannot find task, error: " + err);
				return res.redirect('/');
      }
      Tags.findOne({
        tagid: task.tag
      }).exec(function(err2, tag) {
        if (err2) {
					req.session.message = ["Error 500: cannot get task info."];
          sails.log.error("Task info: cannot find tag, error: " + err);
					return res.redirect('/');
        }
				sails.log.info("Successfully sent task info");
        res.send({task: task, tag: tag});
      });
    })
  },
	/**
	 * @api {post} /taskdone Task status - Completed
	 * @apiName Task Completed
	 * @apiDescription Marks Task as DONE.
	 * @apiGroup Tasks
	 * @apiPermission signed in
	 * @apiParam {Integer} taskid Id of the Task.
	 */
  taskDone: function(req, res) {
		var today = new Date();
		var day = today.getDate();
		var month = today.getMonth() + 1;
		var year = today.getFullYear();

		if (day < 10) day = '0' + day;
		if (month < 10) month = '0' + month;

		today = year + '-' + month + '-' + day;

    Tasks.update({
      taskid: req.body.id
    },
    {
      status: 1,
			finished: today
    }).exec(function(err, updated) {
      if (err) {
				req.session.message = ["Error 500: cannot update task."];
        sails.log.error("Task done: cannot update task, error: " + err);
      }
			else {
				sails.log.info("Successfully marked task as DONE, taskid: " + req.body.id);
			}
			return res.redirect('/');
    });
  },
	/**
	 * @api {post} /dones/taskundone Task status - Uncompleted
	 * @apiName Task Uncompleted
	 * @apiDescription Marks Task as UNDONE.
	 * @apiGroup Tasks
	 * @apiPermission signed in
	 * @apiParam {Integer} taskid Id of the Task.
	 */
	taskUndone: function(req, res) {
		Tasks.update({
      taskid: req.body.id
    },
    {
      status: 0
    }).exec(function(err, updated) {
      if (err) {
				req.session.message = ["Error 500: cannot update task."];
        sails.log.error("Task undone: cannot update task, error: " + err);
      }
			else {
				sails.log.info("Successfully marked task as UNDONE, taskid: " + req.body.id);
			}
			return res.redirect('/dones');
    });
	},
	/**
	 * @api {post} /taskundone Edit Task
	 * @apiName Edit Task
	 * @apiDescription Edit Task's name, description, deadline or tag.
	 * @apiGroup Tasks
	 * @apiPermission signed in
	 * @apiParam {Integer} taskid Id of the Task.
	 * @apiParam {String} name Name of the Task.
	 * @apiParam {String} deadline Deadline of the Task.
	 * @apiParam {String} description Description of the Task.
	 * @apiParam {String} tag Tag of the Task.
	 * @apiParam {Integer} priority Priority rate of the Task.
	 */
	editTask: function(req, res) {
		//TODO: check dates for deadline


		var date = req.body.editdeadline;
    var deadline = date.split(".").reverse().join("-");
		Tasks.update({
			taskid: req.body.taskid
		}, {
			name: req.body.edittodoname,
			deadline: deadline,
			description: req.body.editdescription,
			tag: req.body.edittag,
			priority: req.body.editpriorityrate
		}).exec(function(err, update) {
			if (err) {
				req.session.message = ["Error 500: cannot edit task."];
				sails.log.error("Edit task: cannot edit task, error: " + err);
			}
			else {
				sails.log.info("Succesfully edited task, taskid: " + req.body.taskid);
			}
			return res.redirect('/');
		})
	},
	/**
	 * @api {get} /dones Tasks page - DONEs
	 * @apiName Done tasks page
	 * @apiDescription Opens done tasks page, where User can see tasks he/she finished.
	 * @apiGroup Tasks
	 * @apiPermission signed in
	 * @apiParam {Integer} userid Id of the User.
	 */
	donetasks: function (req, res) {
    User.find({
			userid: req.session.userid
		})
    .populate('tasks', {
      where: {
        status: 1
      }
    })
    .populate('tags')
    .exec(function(err, user) {
      if (err) {
				message = ["Error 500: cannot find user."];
				sails.log.error("Donetasks: cannot find user, error: " + err);
				return res.view('donetasks', {messages: message})
			}
      if (user.length == 0) {
				message = ["Error 500: cannot find user."];
				sails.log.warn("Donetasks: Cannot find user");
				return res.view('donetasks', {messages: message})
			}
      else {
				sails.log.info("Succesfully shown donetasks page."),
			}
      return res.view('donetasks', {tasks: user[0].tasks, tags: user[0].tags, admin: req.session.admin});
    });
  }

};
