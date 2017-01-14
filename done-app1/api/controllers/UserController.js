/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var bcrypt = require("bcrypt");

module.exports = {
  /**
	 * @api {get} /logout Log out
	 * @apiName Log out
	 * @apiDescription User logs out, session ends.
	 * @apiGroup User
	 * @apiPermission signed in
	 * @apiParam {Integer} userid Id of the User.
	 */
	logout: function (request, response) {
		delete request.session.userid;
    sails.log.info("Successfully logged out.");
		return response.redirect("/login");
	},
  /**
	 * @api {post} /login Log in
	 * @apiName Log in
	 * @apiDescription User logs in, session starts.
	 * @apiGroup User
	 * @apiParam {String} e-mail User's e-mail address.
   * @apiParam {String} password User's password.
	 */
	authenticate: function (req, res) {
		User.find({
			email: req.body.email
		}).exec(function(err, user) {
			if (err) {
				sails.log.error("Authenticate: cannot find user, error: " + err);
        req.session.message = ["Error 500: cannot sign in."];
        return res.redirect('/login');
      }
			if (user.length == 0) {
				sails.log.warn("Authenticate: incorrect e-mail or password");
        req.session.message = ["Incorrect e-mail or password."];
        return res.redirect('/login');
			}
			else {
				bcrypt.compare(req.body.password, user[0].password, function(err, res1) {
					if(err || !res1) {
						sails.log.warn("Authenticate: incorrect password");
            req.session.message = ["Incorrect e-mail or password."];
            return res.redirect('/login');
					}
					req.session.userid = user[0].userid;
          req.session.admin = user[0].admin;
          sails.log.info("Successfully logged in, userid: " + user[0].userid);
					return res.redirect('/');
				});
			}
		});
	},
  /**
	 * @api {post} /login Log in
	 * @apiName Log in
	 * @apiDescription User logs in, session starts.
	 * @apiGroup User
   * @apiParam {String} firstname User's first name.
   * @apiParam {String} lastname User's last name.
	 * @apiParam {String} e-mail User's e-mail address.
   * @apiParam {String} password User's password.
	 */
	register: function(req, res) {
    //check if account with this email already exists
    User.find({
			email: req.body.emailReg
		}).exec(function(err, user) {
      sails.log(user);
      if (err) {
        sails.log.error("Register: cannot find user, error: " + err);
        return res.view('homepage', {messages: ["Error"]});
      }
      if (user.length != 0) {
        sails.log.warn("Register: this e-mail address is already registered.");
        req.session.message = ["This e-mail address is already registered."];
        return res.redirect('/login');
      }
      //check if passwords are the same
      if (req.body.passwordReg != req.body.passwordRegRep) {
        req.session.message = ["Passwords don't match."];
        sails.log.warn("Passwords don't match");
        return res.redirect('/login');
      }
      //check for email
      var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!reg.test(req.body.emailReg)) {
        req.session.message = ["E-mail structure is incorrect."];
        sails.log.warn("Register: e-mail structure is incorrect.");
        return res.redirect('/login');
      }
			User.create({
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				email: req.body.emailReg,
				password: req.body.passwordReg
			}).exec(function(err1, records) {
				if (err1) {
					sails.log.error("Register: cannot create user, error: " + err1);
          req.session.message = ["Error: Cannot create user!"];
          return res.redirect('/login');
				}
        req.session.message = ["Succesfully registered."];
        sails.log.info("Successfully registered, userid: " + records.userid);
        return res.redirect('/login');
			});
    });
	},
  /**
	 * @api {get} /login Login page
	 * @apiName Login page
	 * @apiDescription Showing landing page, where User can register or sign in.
	 * @apiGroup User
	 */
	getLogin: function(req, res) {
    if (req.session.message != null) {
      message = req.session.message;
      delete req.session.message;
      return res.view('homepage', {messages: message, admin: req.session.admin});
    }
		return res.view('homepage');
	}
};
