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
    User.findOne({
			userid: req.session.userid
		})
    .exec(function(err, user) {
			var message = "";
			if (req.session.message != null) {
				message = req.session.message;
				delete req.session.message;
			}
      if (err) {
				message = "Error 500: cannot find user.";
				sails.log.error("Profile: cannot find user, error: " + err);
				return res.view('profile', {user: user, admin: req.session.admin, messages: message});
			}
      if (user.length == 0) {
				message = "Error 500: cannot find user.";
				sails.log.warn("Profile: cannot find user.");
			}
      else {
				sails.log.info("Successfully shown profile page.");
      }
			return res.view('profile', {user: user, admin: req.session.admin, messages: [message]});
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
		var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!reg.test(req.body.editemail)) {
			req.session.message = "E-mail structure is incorrect.";
			sails.log.warn("Register: e-mail structure is incorrect.");
			return res.redirect('/profile');
		}

		User.update({
			userid: req.session.userid
		},
		{
			firstname: req.body.editfirstname,
			lastname: req.body.editlastname,
			email: req.body.editemail
		}).exec(function afterwards(err, updated) {
		  if (err) {
				req.session.message = ["Error 500: cannot find user."];
		    sails.log.error("Edit profile: cannot update user, error: " + err);
		  }
			else {
				sails.log.info("Successfully edited user profile.");
			}
		  return res.redirect('/profile');
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
				req.session.message = "Error 500: cannot find user.";
				sails.log.error("Change preferences: cannot update user preferences, error: " + err);
			}
			else {
				req.session.message = "Changes saved.";
				sails.log.info("Successfully changed user preferences.");
			}
			return res.redirect('/profile');
		});
	}
};
