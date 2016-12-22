/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 module.exports = {
 	index: function (request, response) {
		if (request.session.userid != null) {
			return response.view('tasks');
		}
		return response.view('homepage');
  },
	logout: function (request, response) {
		console.log("bedno");
		delete request.session.userid;
		return response.redirect("/");
	},
 	authenticate: function (request, response) {
		 return User.auth(request, response, function(userid) {
			 if (userid != null) {
				 request.session.userid = userid;
			 }
			 //TO DO: modalnega okna ne sme zapreti, sporocilo
			 return response.redirect('/');
		 });
   }

 };
