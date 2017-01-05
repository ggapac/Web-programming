/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


 module.exports = {
 	index: function (req, res) {
    User.find({
			userid: req.session.userid
		})
    .populate('tasks', {
      where: {
        status: 0
      }
    })
    .populate('tags')
    .exec(function(err, user) {
      if (err) {
				sails.log("cannot find user, error");
			}
      if (user.length == 0) {
				sails.log("cannot find user");
			}
      else {
        return res.view('tasks', {tasks: user[0].tasks, tags: user[0].tags});
      }
    });
  },
  addTag: function (req, res) {
    sails.log(req.body.tagname);
    Tags.create({
      name: req.body.tagname,
      user: req.session.userid
    }).exec(function(err, records) {
      if (err) {
        sails.log("Cannot create tag");
      }
      return res.redirect('/');
    });
  },
  donetasks: function (req, res) {
    User.find({
			userid: req.session.userid
		})
    .populate('tasks', {
      where: {
        status: 1
      }
    })
    .populate('tags')
    .exec(function(err, user) {
      if (err) {
				sails.log("cannot find user, error");
			}
      if (user.length == 0) {
				sails.log("cannot find user");
			}
      else {
        return res.view('donetasks', {tasks: user[0].tasks, tags: user[0].tags});
      }
    });
  },
  productivity: function (req, res) {
    return res.view('productivity');
  }

 };
