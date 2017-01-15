var Sails = require('sails').constructor;
var mySailsApp = new Sails();

mySailsApp.lift({
  port: 1337
}, function(err) {
  if (err) {
     console.error('Failed to lift app.  Details:', err);
     throw err;
  }
  mySailsApp.lower();
});
