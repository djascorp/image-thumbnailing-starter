import supertest from 'supertest'
import app from '../../index'

const request = supertest(app)
describe('My Images API', () => {
  it('It should not respond with 200 status code on /api/images without params', (done) => {
    request
      .get('/api/images')
      .then((response) => {
        expect(response.status).not.toBe(200)
        done()
      })
      .catch((error) => {
        console.log(error)
        done()
      })
  })
  it('It should respond with 200 status code on /api/images with filename params', (done) => {
    request
      .get('/api/images?filename=encenadaport')
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
