import supertest from 'supertest'
import app from '../index'

const request = supertest(app)
describe('My Server', () => {
  it('It should respond with 200 status code ', (done) => {
    request.get('http://localhost:3000/', (error, response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })
})
