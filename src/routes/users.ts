import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/usersController";
const usersRouter = Router();

usersRouter.route("/users").get(getUsers).post(createUser);
usersRouter
  .route("/users/:userId")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

export { usersRouter };
