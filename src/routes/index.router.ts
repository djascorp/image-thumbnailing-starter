import express, { Router } from 'express'
import { imageRouter } from './images.router'

const routes:Router = express.Router();

routes.get('/', (req, res) => {
    // res.send('Listen to server')
    res.sendStatus(200)
})

routes.use('/api', imageRouter)

export {routes}