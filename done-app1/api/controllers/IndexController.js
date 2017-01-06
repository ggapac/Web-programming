/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


 module.exports = {
 	index: function (req, res) {
    User.find({
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
				sails.log("cannot find user, error");
			}
      if (user.length == 0) {
				sails.log("cannot find user");
			}
      else {
        return res.view('tasks', {tasks: user[0].tasks, tags: user[0].tags});
      }
    });
  },
  addTag: function (req, res) {
    sails.log(req.body.tagname);
    Tags.create({
      name: req.body.tagname,
      user: req.session.userid
    }).exec(function(err, records) {
      if (err) {
        sails.log("Cannot create tag");
      }
      return res.redirect('/');
    });
  },
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
				sails.log("cannot find user, error");
			}
      if (user.length == 0) {
				sails.log("cannot find user");
			}
      else {
        return res.view('donetasks', {tasks: user[0].tasks, tags: user[0].tags});
      }
    });
  },
  productivity: function (req, res) {
    return res.view('productivity');
  },
  addTask: function(req, res) {
    var date = req.body.deadline;
    var deadline = date.split(".").reverse().join("-");
    //var time = " 00:00:00"
    //var deadline = date1 + time;
    Tasks.create({
      name: req.body.taskname,
      description: req.body.description,
      priority: req.body.priority,
      deadline: deadline,
      user: req.session.userid
    }).exec(function(err, task) {
      if (err) {
        sails.log("Cannot create task");
      }
      for (i = 0; i < req.body.tags.length; i++) {
        Tags.find({
          name: req.body.tags[i]
        }).exec(function(err1, tag) {
          if (err1) {
            sails.log("Cannot find tag");
          }
          Tasktags.create({
            taskid: task.taskid,
            tagid: tag[0].tagid
          }).exec(function(err2, tasktag) {
            if (err2) {
              sails.log("Cannot make tasktag");
            }
          });
        });
      }
      return res.redirect('/');
    });
  },
  taskinfo: function(req, res) {
    Tasks.find({
      taskid: req.params['id']
    }).exec(function(err, records) {
      if (err) {
        sails.log("Cannot find task, taskinfo");
      }
      res.send(records[0]);
    })
  }

 };
