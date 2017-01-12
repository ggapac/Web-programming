/**
 * TasksController
 *
 * @description :: Server-side logic for managing Tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
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
        sails.log("Cannot make task, add task.");
      }
      return res.send({task: task});
    });
  },
  taskInfo: function(req, res) {
    Tasks.findOne({
      taskid: req.params['id']
    }).exec(function(err, task) {
      if (err) {
        sails.log("Cannot find task, taskinfo");
      }
      Tags.findOne({
        tagid: task.tag
      }).exec(function(err2, tag) {
        if (err2) {
          sails.log("Cannot find tag, taginfo");
        }
        res.send({task: task, tag: tag});
      });
    })
  },
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
        sails.log("Cannot update task, taskdone.");
      }
			return res.redirect('/');
    });
  },
	taskUndone: function(req, res) {
		Tasks.update({
      taskid: req.body.id
    },
    {
      status: 0
    }).exec(function(err, updated) {
      if (err) {
        sails.log("Cannot update task, taskundone.");
      }
			return res.redirect('/dones');
    });
	},
	editTask: function(req, res) {
		//TODO: check dates for deadline

		//dajanje tagov notri ne dela
		sails.log(req.body.edittag);
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
				sails.log("Cannot edit task");
			}
			return res.redirect('/');
		})
	}

};
