module.exports = function(req, res, next) {
  if (!req.session.userid) {
    console.log("sem tukaj1")
    return res.redirect('/login');
  }
  else{
    return next();
  }
};
