module.exports = function(req, res, next) {
  if (!req.session.userid) {
    return next();
  }
  else{
    return res.redirect('/');
  }
};
