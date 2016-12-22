module.exports = function(req, res, next) {
  if (!req.session) {
    return res.redirect('/');
  }
  else{
    return next();
  }
};
