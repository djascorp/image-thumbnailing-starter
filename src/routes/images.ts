import express, { Router } from "express";
const imageRouter: Router = express.Router();

imageRouter.get("/images", (req: express.Request, res: express.Response) => {
  console.log(req.query);
  res.send(req.query.img);
  res.sendStatus(200);
});

export { imageRouter };
