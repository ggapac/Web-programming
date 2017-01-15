var request = require('supertest'),
    should = require('should');

describe('ProductivityController', function() {
  describe('#productivity()', function() {
    it('should redirect to /productivity', function(done) {
      request(sails.hooks.http.app)
        .post('/login')
        .send({email: 'g@g', password: 'password'})
        .expect(302)
        .expect('location', '/', function() {
          request(sails.hooks.http.app)
            .get('/productivity')
            .expect(200)
        });
        done();
    });
  });
});
