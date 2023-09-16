const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.get("/", (req, res) => {
//   res.send({ message: "Node.js and Express REST API" });
// });

const server = app.listen(PORT, (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log(`Server listening on port ${server.address().port}`);
  }
});

routes(app);
