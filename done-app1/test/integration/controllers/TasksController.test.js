var request = require('supertest'),
    should = require('should');

describe('TasksController', function() {
  describe('#addTask()', function() {
    it('should redirect to / and add task', function(done) {
      request(sails.hooks.http.app)
        .post('/login')
        .send({email: 'g@g', password: 'password'})
        .expect(302)
        .expect('location', '/', function(done) {
          request(sails.hooks.http.app)
            .post('/newtask')
            .send({name: 'unit', description: 'making a task with unit test', deadline: '20.08.2017', tag: 1})
            .expect(302)
            .expect('location', '/', done);
        });
        done();
    });
  });
});

describe('TasksController', function() {
  describe('#addTask()', function() {
    it('should redirect to /', function(done) {
      request(sails.hooks.http.app)
        .post('/login')
        .send({email: 'g@g', password: 'password'})
        .expect(302)
        .expect('location', '/', function() {
          request(sails.hooks.http.app)
            .get('/')
            .expect(200)
        });
        done();
    });
  });
});
