/**
 * AdminController
 *
 * @description :: Server-side logic for managing Admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/**
	 * @api {get} /admin Open Admin panel
	 * @apiName Open Admin panel
	 * @apiDescription Opens Admin panel, where Admin can see all the Users.
	 * @apiGroup Admin
	 * @apiPermission admin
	 * @apiParam {Integer} userid User Ids of all Users, except this particular Admin.
	 */
	adminPanel: function(req, res) {
		User.find({
			userid: {'!': req.session.userid}
		}).exec(function(err, users) {
			if (err) {
				sails.log.error("Admin panel: cannot find all users, error: " + err);
			}
			for (i = 0; i < users.length; i++) {
				var date = users[i].createdAt;
				users[i].createdAt = zeros(date.getDay()) + "." + zeros((date.getMonth() + 1)) + "." + date.getFullYear();
			}
			sails.log.info("Successfully found all users for admin panel.");
			return res.view('admin', {users: users});
		})
	}
};

function zeros(s) { return (s < 10) ? '0' + s : s; }
