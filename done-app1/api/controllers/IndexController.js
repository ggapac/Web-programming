/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
 	index: function (request, response) {
     return response.view('homepage');
   },
 	authenticate: function (request, response) {
		 console.log(request.params.all());
		 console.log('lalaland');
		 return response.view('homepage');
   },
 	getLogin: function (request, response) {
		 console.log('lalaland123123');
		 return response.view('homepage');
   }
 };
