/**
 * TagsController
 *
 * @description :: Server-side logic for managing Tags
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addTag: function (req, res) {
		//check if tag already exists
		Tags.find({
			name: req.body.tagname,
			user: req.session.userid
		}).exec(function(err, tag) {
			if (err) {
				sails.log("Cannot find tag, add tag");
			}
			if (tag.length != 0) {
				req.session.message = ["Tag already exists."];
				return res.redirect('/');
			}
			Tags.create({
	      name: req.body.tagname,
	      user: req.session.userid
	    }).exec(function(err, records) {
	      if (err) {
	        sails.log("Cannot create tag");
					req.session.message = ["Server error, cannot create tag."]
					return res.redirect('/');
	      }
	      return res.redirect('/');
	    });
		});
  }
};
