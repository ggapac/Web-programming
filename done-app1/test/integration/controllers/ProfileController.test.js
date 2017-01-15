var request = require('supertest'),
    should = require('should');

describe('ProfileController', function() {
  describe('#editprofile()', function() {
    it('should redirect to /profile and edit profile', function(done) {
      request(sails.hooks.http.app)
        .post('/login')
        .send({email: 'g@g', password: 'password'})
        .expect(302)
        .expect('location', '/', function(done) {
          request(sails.hooks.http.app)
            .post('/editprofile')
            .send({firstname: 'greta', lastname: 'gasparac', email: 'g@g'})
            .expect(302)
            .expect('location', '/profile', done);
        });
        done();
    });
  });
});

describe('ProfileController', function() {
  describe('#changePreferences()', function() {
    it('should change preferences', function(done) {
      request(sails.hooks.http.app)
        .post('/login')
        .send({email: 'g@g', password: 'password'})
        .expect(302)
        .expect('location', '/', function(done) {
          request(sails.hooks.http.app)
            .post('/profile/changePreferences')
            .send({tasksperday: 2})
            .expect(302)
            .expect('location', '/profile', done);
        });
        done();
    });
  });
});
