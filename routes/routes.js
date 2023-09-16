const users = [
  {
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
  },
  {
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
  },
];
const router = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World");
  });
  app.get("/api/users", (request, response) => {
    response.send(users);
  });
};

module.exports = router;
