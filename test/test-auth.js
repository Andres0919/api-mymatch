let chai = require('chai')
let chaiHttp = require('chai-http')
const expect = require('chai').expect

chai.use(chaiHttp)
const url = 'http://localhost:5000'

describe('Login: ', () => {
  it('should return a token', (done) => {
    chai
      .request(url)
      .post('/login')
      .send({ email: '', password: '12345678' })
      .end(function (err, res) {
        console.log(res.body)
        expect(res).to.have.status(200)
        done()
      })
  })
})
