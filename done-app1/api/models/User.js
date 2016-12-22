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
     },
     admin: {
       type: 'integer'
     },
     toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
   },
   auth: function (req, res) {
     User.find({
       email: req.body.email,
       password: req.body.password
     }).exec(function(err, user) {
       if (err) {
         console.log("cannot find user, error");
         return res.view("homepage");
       }
       if (user.length == 0) {
         console.log("cannot find user");
       }
       else {
         req.session.userid = user[0].userid;
       }
       return res.redirect('/');
     });
   }
 };
