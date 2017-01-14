/**
 * ProductivityController
 *
 * @description :: Server-side logic for managing Productivities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/**
	 * @api {get} /productivity Productivity page
	 * @apiName Productivity page
	 * @apiDescription Opens productivity page, where User's productivity through time can be seen.
	 * @apiGroup Productivity
	 * @apiPermission signed in
	 */
	productivity: function (req, res) {
		if (req.session.message != null) {
      message = req.session.message;
      delete req.session.message;
      return res.view('productivity', {messages: message, admin: req.session.admin});
    }
		return res.view('productivity', {admin: req.session.admin});
  },
	/**
	 * @api {get} /productivity/getdata Get all data
	 * @apiName Get all data
	 * @apiDescription Gets all User's completed Tasks.
	 * @apiGroup Productivity
	 * @apiPermission signed in
	 * @apiParam {Integer} userid Id of the User
	 */
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
				req.session.message = ["Error 500: cannot get data."];
				sails.log.error("Get data: cannot find user, error: " + err);
				return res.redirect('/productivity');
			}
      else {
				//sort by date
				user.tasks.sort(function(a,b) {
					return (new Date(a.finished).getTime() - new Date(b.finished).getTime())
				});
				sails.log.info("Successfully got data");
        return res.send({user: user, tasks: user.tasks, admin: req.session.admin});
      }
    });
	},
	/**
	 * @api {get} /productivity/getdata Get month data
	 * @apiName Get month data
	 * @apiDescription Gets User's completed Tasks of current month.
	 * @apiGroup Productivity
	 * @apiPermission signed in
	 * @apiParam {Integer} userid Id of the User
	 */
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
				req.session.message = ["Error 500: cannot get monthly data."];
				sails.log.error("Get month data: cannot find user, error: " + err);
				return res.redirect('/productivity');
			}
      else {
				//sort by date
				user.tasks.sort(function(a,b) {
					return (new Date(a.finished).getTime() - new Date(b.finished).getTime())
				});
				sails.log.info("Successfully got month data");
        return res.send({user: user, tasks: user.tasks, admin: req.session.admin});
      }
    });


	}
};
