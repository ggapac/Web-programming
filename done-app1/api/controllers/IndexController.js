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
		return res.view('tasks');
		//}
		//return res.view('homepage');
  }

 };
