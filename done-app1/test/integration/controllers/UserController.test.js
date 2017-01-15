var request = require('supertest'),
    should = require('should');

describe('UserController', function() {
  describe('#authenticate()', function() {
    it('should redirect to /', function(done) {
      request(sails.hooks.http.app)
        .post('/login')
        .send({email: 'g@g.com', password: 'password'})
        .expect(302)
        .expect('location', '/', done);
    });
  });
});

describe('UserController', function() {
  describe('#getLogin()', function() {
    it('should redirect to /login', function(done) {
      request(sails.hooks.http.app)
        .get('/login')
        .send({})
        .expect(200)
      done();
    });
  });
});
