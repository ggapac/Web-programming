/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


 module.exports = {
 	index: function (req, res) {
		//console.log(req.session.userid);
		//if (req.session.userid != null) {

    User.find({
			userid: req.session.userid
		})
    .populate('tasks')
    .exec(function(err, user) {
      if (err) {
				sails.log("cannot find user, error");
			}
      if (user.length == 0) {
				sails.log("cannot find user");
			}
      else {
        sails.log(user[0].tasks)
        return res.view('tasks', {tasks: user[0].tasks});
      }
    });


		//}
		//return res.view('homepage');
  }

 };
