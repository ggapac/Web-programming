/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


 module.exports = {
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
				sails.log("cannot find user, error");
			}
      if (user.length == 0) {
				sails.log("cannot find user");
			}
      else {
        if (user.tasksperday == 0) {
          return res.view('tasks', {tasks: user.tasks, tags: user.tags});
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
            return res.view('tasks', {dailytasks: user.tasks, tags: user.tags});
          }
          else {
            daily = user.tasks.slice(0, user.tasksperday);
            other = user.tasks.slice(user.tasksperday, user.tasks.length);
            return res.view('tasks', {dailytasks: daily, othertasks: other, tags: user.tags});
          }
        }
      }
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
  }


 };
