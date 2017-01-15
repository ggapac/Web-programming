var sailsConstructor = require('sails').constructor;
var sails = new sailsConstructor();

sails.lift({
  port: 1337
}, function(err) {
  if (err) {
    throw err;
  }
  sails.lower();
});
