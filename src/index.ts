
import express, { Express } from 'express'
import { routes } from './routes/index.router'

const PORT = 3000

const app: Express = express()
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('Server is Loading')
})
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`server started at localhost:${PORT}`)
})

export default app
