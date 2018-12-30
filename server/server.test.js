const request = require('supertest')

var app = require('./server').app

test('Should return hello world', done => {
  request(app)
    .get('/')
    .expect(200)
    .expect({ hello: 'world!' })
    .end(done)
})
