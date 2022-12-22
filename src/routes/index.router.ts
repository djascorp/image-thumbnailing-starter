import express, { Router } from 'express'
import { imageRouter } from './images.router'

const routes: Router = express.Router()

routes.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('Listen to API')
})

routes.use('/images', imageRouter)

export { routes }
