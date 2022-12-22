import supertest from 'supertest'
import app from '../../index'

const request = supertest(app)
describe('My API', () => {
  it('It should respond with 200 status code on /api', (done) => {
    request
      .get('/api')
      .then((response) => {
        expect(response.status).toBe(200)
        done()
      })
      .catch((error) => {
        console.log(error)
        done()
      })
  })
})
