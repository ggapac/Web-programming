/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var bcrypt = require("bcrypt");

module.exports = {
	logout: function (request, response) {
		delete request.session.userid;
		return response.redirect("/login");
	},
	authenticate: function (req, res) {
		User.find({
			email: req.body.email
		}).exec(function(err, user) {
			if (err) {
				sails.log("cannot find user, error");
        req.session.message = ["Incorrect e-mail or password."];
        return res.redirect('/login');
      }
			if (user.length == 0) {
				sails.log("cannot find user");
        req.session.message = ["Incorrect e-mail or password."];
        return res.redirect('/login');
			}
			else {
				bcrypt.compare(req.body.password, user[0].password, function(err, res1) {
					if(err || !res1) {
						console.log("incorrect password");
            req.session.message = ["Incorrect e-mail or password."];
            return res.redirect('/login');
					}
					req.session.userid = user[0].userid;

					return res.redirect('/');
				});
			}
		});
	},
	register: function(req, res) {
    //check if account with this email already exists
    sails.log(req.body.emailReg);
    User.find({
			email: req.body.emailReg
		}).exec(function(err, user) {
      sails.log(user);
      if (err) {
        return res.view('homepage', {messages: ["Error"]});
      }
      if (user.length != 0) {
        sails.log("user ze obstaja");
        req.session.message = ["This e-mail address is already registered."];
        return res.redirect('/login');
      }
      //check if passwords are the same
      if (req.body.passwordReg != req.body.passwordRegRep) {
        sails.log("passwords don't match");
        req.session.message = ["Passwords don't match."];
        return res.redirect('/login');
      }
      //check for email
      var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!reg.test(req.body.emailReg)) {
        req.session.message = ["E-mail is not correct."];
        return res.redirect('/login');
      }
			User.create({
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				email: req.body.emailReg,
				password: req.body.passwordReg
			}).exec(function(err, records) {
				if (err) {
					sails.log("Cannot create user");
          req.session.message = ["Error: Cannot create user!"];
          return res.redirect('/login');
				}
        req.session.message = ["Succesfully registered."];
        return res.redirect('/login');
			});
    });
	},
	getLogin: function(req, res) {
    if (req.session.message != null) {
      message = req.session.message;
      delete req.session.message;
      return res.view('homepage', {messages: message});
    }
		return res.view('homepage');
	}
};
