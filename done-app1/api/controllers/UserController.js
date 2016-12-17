/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	auth: function (email, password) {
		User.query('SELECT user.userid FROM user WHERE user.email = ? AND user.password = ?', [ email, password ] ,
			function(err, rawResult) {
			  if (err) { return res.serverError(err); }

			  sails.log(rawResult);
			  // ...grab appropriate data...
			  // (result format depends on the SQL query that was passed in, and the adapter you're using)

			  // Then parse the raw result and do whatever you like with it.

			  return res.ok();

		});
	}
};
