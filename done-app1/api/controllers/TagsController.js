/**
 * TagsController
 *
 * @description :: Server-side logic for managing Tags
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
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
  }
};
