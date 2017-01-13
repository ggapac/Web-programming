module.exports = function (req, res, next) {
  if (req.session.userid && req.session.admin == 1) {
    return next();
  }
  else {
    return res.redirect('/');
  }
}
