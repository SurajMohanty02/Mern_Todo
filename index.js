const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const TodoRoutes = require("./routes/TodoRoutes");
const connect = require("./config/db");
connect();
app.get("/", (req, res) => {
  res.send("TodoMern");
});
app.use(bodyParser.json());
app.use("/", TodoRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Your Todo App is Running on ${PORT}`);
});
