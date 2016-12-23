module.exports = function(req, res, next) {
  console.log("se izvedem, login")
  if (!req.session.userid) {
    return next();
  }
  else{
    return res.redirect('/');
  }
};
