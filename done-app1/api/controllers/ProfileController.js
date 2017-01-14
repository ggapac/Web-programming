/**
 * ProfileController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/**
	 * @api {get} /profile Profile page
	 * @apiName Profile page
	 * @apiDescription Opens profile page, where User can see and edit his/hers profile and preferences.
	 * @apiGroup Profile
	 * @apiPermission signed in
	 * @apiParam {Integer} userid Id of the User.
	 */
	profile: function (req, res) {
    User.find({
			userid: req.session.userid
		})
    .exec(function(err, user) {
			var message = null;
      if (err) {
				message = ["Error 500: cannot find user."];
				sails.log.error("Profile: cannot find user, error: " + err);
				return res.view('profile', {user: user[0], admin: req.session.admin, messages: message});
			}
      if (user.length == 0) {
				message = ["Error 500: cannot find user."];
				sails.log.warn("Profile: cannot find user.");
			}
      else {
				sails.log.info("Successfully shown profile page.");
      }
			return res.view('profile', {user: user[0], admin: req.session.admin, messages: message});
    });
  },
	/**
	 * @api {post} /editprofile Edit Profile
	 * @apiName Edit Profile
	 * @apiDescription User can edit first name, last name, e-mail.
	 * @apiGroup Profile
	 * @apiPermission signed in
	 * @apiParam {Integer} userid Id of the User.
	 * @apiParam {String} firstname First name of the User.
	 * @apiParam {String} lastname Last name of the User.
	 * @apiParam {String} email E-mail of the User.
	 */
	editProfile: function(req, res) {
		User.update({
			userid: req.session.userid
		},
		{
			firstname: req.body.editfirstname,
			lastname: req.body.editlastname,
			email: req.body.editemail
		}).exec(function afterwards(err, updated) {
		  if (err) {
				message = ["Error 500: cannot find user."];
		    sails.log.error("Edit profile: cannot update user, error: " + err);
				return res.view('profile', {user: updated[0], admin: req.session.admin, messages: message});
		  }
			sails.log.info("Successfully edited user profile.");
		  return res.view('profile', {user: updated[0], admin: req.session.admin});
		});
	},
	/**
	 * @api {post} /profile/preferences Change Preferences
	 * @apiName Change Preferences
	 * @apiDescription User can change his page preferences.
	 * @apiGroup Profile
	 * @apiPermission signed in
	 * @apiParam {Integer} userid Id of the User.
	 * @apiParam {Integer} tasksperday Number of tasks per day that the app picks.
	 */
	changePreferences: function(req, res) {
		User.update({
			userid: req.session.userid
		},
		{
			tasksperday: req.body.number
		}).exec(function(err, updated) {
			var message = ""
			if (err) {
				message = ["Error 500: cannot find user."];
				sails.log.error("Change preferences: cannot update user preferences, error: " + err);
			}
			else {
				message = ["Changes saved."];
				sails.log.info("Successfully changed user preferences.");
			}
			return res.view('profile', {user: updated[0], messages: message, admin: req.session.admin});
		});
	}
};
