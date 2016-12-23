/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
 var bcrypt = require("bcrypt");

 module.exports = {
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
       size: 45,
       required: true,
       unique: true
     },
     password: {
       type: 'string',
       minLength: 5,
       required: true
     },
     todos: {
       type: 'integer',
       defaultsTo: 0
     },
     dones: {
       type: 'integer',
       defaultsTo: 0
     },
     productivitypts: {
       type: 'integer',
       defaultsTo: 0
     },
     admin: {
       type: 'integer',
       defaultsTo: 0
     },
     toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
   },
   beforeCreate: function(user, cb) {
      bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(user.password, salt, function(err, hash) {
              if (err) {
                  console.log(err);
                  cb(err);
              } else {
                  user.password = hash;
                  cb();
              }
          });
      });
    }
 };
