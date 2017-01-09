/**
 * TasksController
 *
 * @description :: Server-side logic for managing Tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addTask: function(req, res) {
    var date = req.body.deadline;
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
      return res.redirect('/');
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
    Tasks.update({
      taskid: req.body.id
    },
    {
      status: 1
    }).exec(function(err, updated) {
      if (err) {
        sails.log("Cannot update task, taskdone.");
      }
    });
  }

};
