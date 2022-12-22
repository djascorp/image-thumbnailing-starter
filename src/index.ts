import express, { Express } from "express";
import { imageRouter } from "./routes/images";

const PORT = 3000;

const app: Express = express();

app.get("/", (req, res) => {
  // res.send('Listen to server')
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`server started at localhost:${PORT}`);
});
app.use('/images',imageRouter);
export default app;
