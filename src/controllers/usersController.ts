import { Request, Response } from "express";
import { User } from "../interface/myInterface";
import { users } from "../data/data-users";

const getUsers = (req: Request, res: Response): void => {
  res.status(200).json({ succes: true, data: users });
};

const getUser = (req: Request, res: Response): void => {
  const userId: number = parseInt(req.params.userId);
  const user: User | undefined = users.find((user) => {
    return user.id === userId;
  });
  if (user) {
    res.status(200).json({ succes: true, data: user });
  } else {
    res
      .status(404)
      .json({ succes: false, msg: `no person width id: ${userId}` });
  }
};

const createUser = (req: Request, res: Response): void => {
  const { name }: { name: string } = req.body;
  if (!name || typeof name !== "string") {
    res.status(400).json({ succes: false, msg: "Please provide a valid name" });
  } else {
    let user: User = { id: Date.now(), ...req.body };
    users.push(user);
    res.status(201).json({ succes: true, data: user });
  }
};

const updateUser = (req: Request, res: Response): void => {
  const { userId } = req.params;
  const { name, email }: { name?: string; email?: string } = req.body;

  const userIndex: number = users.findIndex(
    (user) => user.id === parseInt(userId, 10)
  );

  if (userIndex === -1) {
    res
      .status(404)
      .json({ success: false, msg: `No person with id: ${userId}` });
  }

  const user: User = users[userIndex];

  if (typeof name === "string" && typeof email === "string") {
    const updatedUser: Partial<User> = { ...user, name, email };
    users[userIndex] = { ...user, name, email };
    res.status(200).json({ success: true, data: updatedUser });
  } else {
    res.status(400).json({ success: false, msg: "Invalid name or email" });
  }
};

const deleteUser = (req: Request, res: Response): void => {
  const { userId } = req.params;
  const userIndex: number = users.findIndex(
    (user) => user.id === parseInt(userId, 10)
  );
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1)[0];
    res.status(200).json({ success: true, data: deletedUser });
  } else {
    res
      .status(404)
      .json({ success: false, msg: `No person with id: ${userId}` });
  }
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
