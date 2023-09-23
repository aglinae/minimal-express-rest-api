const express = require("express");
const PORT = 5000;
const usersRoutes = require("./routes/users");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", usersRoutes);

app.listen(PORT, (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log(`Server listening on port: http://localhost:${PORT}`);
  }
});
