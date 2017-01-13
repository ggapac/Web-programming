/**
 * ProductivityController
 *
 * @description :: Server-side logic for managing Productivities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	productivity: function (req, res) {
		return res.view('productivity', {admin: req.session.admin});
  },
	getData: function (req, res) {
		User.findOne({
			userid: req.session.userid
		})
    .populate('tasks', {
      where: {
        status: 1
      }
    })
    .exec(function(err, user) {
      if (err) {
				sails.log("Cannot find user, error");
			}
      else {
				//sort by date
				user.tasks.sort(function(a,b) {
					return (new Date(a.finished).getTime() - new Date(b.finished).getTime())
				});
        return res.send({tasks: user.tasks, admin: req.session.admin});
      }
    });
	},
	getMonthData: function(req, res) {
		var date = new Date();
		var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
		User.findOne({
			userid: req.session.userid
		})
		.populate('tasks', {
			where: {
				status: 1,
				finished: {'>=': firstDay}
			}
		})
		.exec(function(err, user) {
      if (err) {
				sails.log("Cannot find user, error");
			}
      else {
				//sort by date
				user.tasks.sort(function(a,b) {
					return (new Date(a.finished).getTime() - new Date(b.finished).getTime())
				});
        return res.send({tasks: user.tasks, admin: req.session.admin});
      }
    });


	}
};
