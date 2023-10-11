import express from "express";

import { Request, Response } from "express";

const PORT = 5000;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Hello World");
});
