const request = require('supertest')
const app = require('../app')

it('list all users', (done) => {
  request(app).get('/api/users').expect(200, done)
})

it('add user', (done) => {
  request(app)
    .post('/api/users')
    .send({
      name: 'My match',
      email: 'andres.posada0919@gmail.com',
      password: '12345678',
      author: 'Andrés Posada',
    })
    .expect(201, done)
})
