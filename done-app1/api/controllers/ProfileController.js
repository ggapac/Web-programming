/**
 * ProfileController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	profile: function (req, res) {
    User.find({
			userid: req.session.userid
		})
    .exec(function(err, user) {
      if (err) {
				sails.log("cannot find user, error");
			}
      if (user.length == 0) {
				sails.log("cannot find user");
			}
      else {
        return res.view('profile', {user: user[0]});
      }
    });
  },
	editProfile: function(req, res) {
		User.update({
			userid: req.session.userid
		},
		{
			firstname: req.body.editfirstname,
			lastname: req.body.editlastname,
			email: req.body.editemail
		}).exec(function afterwards(err, updated){
		  if (err) {
		    sails.log("Cannot update user");
		    return;
		  }
		  return res.view('profile', {user: updated[0]});
		});
	}
};
