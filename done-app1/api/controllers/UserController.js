/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var bcrypt = require("bcrypt");

module.exports = {
	logout: function (request, response) {
		console.log("bedno");
		delete request.session.userid;
		return response.redirect("/login");
	},
	authenticate: function (req, res) {
		User.find({
			email: req.body.email
		}).exec(function(err, user) {
			if (err) {
				console.log("cannot find user, error");
				return res.redirect('/login');
			}
			if (user.length == 0) {
				console.log("cannot find user");
				return res.redirect('/login');
			}
			else {
				bcrypt.compare(req.body.password, user[0].password, function(err, res1) {
					if(err || !res) {
						console.log("incorrect password");
						return res1.redirect('/login');
					}
					req.session.userid = user[0].userid;

					return res.redirect('/');
				});
			}
		});
	},
	register: function(req, res) {
		//check if passwords are the same
		bcrypt.compare(req.body.passwordReg, req.body.passwordRegRep, function(err, res1) {
			if (err || !res) {
				sails.log("passwords don't match");
				return res1.redirect('/login');
			}
			User.create({
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				email: req.body.emailReg,
				password: req.body.passwordReg
			}).exec(function(err, records) {
				if (err) {
					console.log(err);
					sails.log("Cannot create user");
					return res.redirect('/');
				}
				return res.ok();
			});
		})
	},
	getLogin: function(req, res) {
		return res.view('homepage');
	}
};
