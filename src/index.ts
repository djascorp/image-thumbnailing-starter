import express, { Express } from 'express'
import { routes } from './routes/index.router'

const PORT = 3000

const app: Express = express()

app.use(routes);

app.listen(PORT, () => {
  console.log(`server started at localhost:${PORT}`)
})


export default app
