let users = require("../data/data-users");

const getUsers = (req, res) => {
  res.send(users);
};

const getUser = (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find((user) => {
    return user.id === userId;
  });
  res.send(user);
};

const createUser = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  let user = { id: Date.now(), ...req.body };
  users.push(user);
  res.status(201).json({ success: true, data: user });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { email } = req.body;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return res
      .status(201)
      .json({ succes: false, msg: `no person with id: ${id} ` });
  }
  users = users.map((user) => {
    if (user.id === Number(id)) {
      user.name = name;
      user.email = email;
    }
    return user;
  });
  return res.status(200).json({ succes: true, data: users });
};

const deleteUser = (req, res) => {
  const userQueryID = Number(req.params.id);
  const user = users.find((user) => user.id === userQueryID);
  if (!user) {
    return res
      .status(400)
      .json({ success: false, msg: `no person with id: ${req.params.id}` });
  }
  users = users.filter((user) => {
    return user.id !== userQueryID;
  });
  return res.status(200).json({ success: true, data: users });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
