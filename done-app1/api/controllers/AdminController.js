/**
 * AdminController
 *
 * @description :: Server-side logic for managing Admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	adminPanel: function(req, res) {
		User.find({
			userid: {'!': req.session.userid}
		}).exec(function(err, users) {
			if (err) {
				sails.log("Cannot find all users, admin");
			}
			var date = users[0].createdAt;
			for (i = 0; i < users.length; i++) {
				var date = users[i].createdAt;
				users[i].createdAt = zeros(date.getDay()) + "." + zeros((date.getMonth() + 1)) + "." + date.getFullYear();
			}
			return res.view('admin', {users: users});
		})
	}
};

function zeros(s) { return (s < 10) ? '0' + s : s; }
