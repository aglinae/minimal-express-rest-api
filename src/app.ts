import express from "express";
import { usersRouter } from "./routes/users";
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", usersRouter);

app.listen(PORT, () => {
  console.log("hello");
});
