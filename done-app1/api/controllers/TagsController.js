/**
 * TagsController
 *
 * @description :: Server-side logic for managing Tags
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {
	/**
	 * @api {POST} /newtag Create a new Tag
	 * @apiName New Tag
	 * @apiDescription Creates a new tag for the User.
	 * @apiGroup Tags
	 * @apiPermission signed in
	 * @apiParam {Integer} userid Id of the User.
	 * @apiParam {String} name Name of new Tag, which should be different from existing Tags.
	 * @apiError UserNotFound The <code>id</code> of the User was not found.
	 * @apiError NoAccessRight Only signed in users can perform the action.
	 * @apiError AlreadyExists User already has a Tag with <code>name</code>
	 */
	addTag: function (req, res) {
		//check if tag already exists
		Tags.find({
			name: req.body.tagname,
			user: req.session.userid
		}).exec(function(err, tag) {
			if (err) {
				sails.log.error("Add tag: cannot find tag, error: " + err);
			}
			if (tag.length != 0) {
				req.session.message = ["Tag already exists."];
				sails.log.warn("Add tag: tag with this name already exists.")
				return res.redirect('/');
			}
			Tags.create({
	      name: req.body.tagname,
	      user: req.session.userid
	    }).exec(function(err, records) {
	      if (err) {
	        sails.log.error("Add tag: cannot create tag, error: " + err);
					req.session.message = ["Server error, cannot create tag."]
					return res.redirect('/');
	      }
				sails.log.info("Add tag: successfully added tag.")
	      return res.redirect('/');
	    });
		});
  }
};
