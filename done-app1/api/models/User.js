/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     userid: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true
     },
     firstname: {
       type: 'string',
       size: 45
     },
     lastname: {
       type: 'string',
       size: 45
     },
     email: {
       type: 'string',
       size: 45
     },
     password: {
       type: 'string',
       size: 45
     },
     todos: {
       type: 'integer'
     },
     dones: {
       type: 'integer'
     },
     productivitypts: {
       type: 'integer'
     }
   },
   auth: function (email, password, callback) {
     //TO DO: orm
     User.query('SELECT user.userid FROM user WHERE user.email = ? AND user.password = ?', [ email, password ] ,
       function(err, rawResult) {
         if (err) { return res.serverError(err); }

         //sails.log(rawResult[0].userid);
         // ...grab appropriate data...
         // (result format depends on the SQL query that was passed in, and the adapter you're using)

         // Then parse the raw result and do whatever you like with it.
         var a = null;
         if (rawResult[0] != null) {
           a = rawResult[0].userid;
         }

         callback(a);

     });
   }
 };
