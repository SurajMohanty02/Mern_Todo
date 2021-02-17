const express = require("express");
const {
  createText,
  getText,
  deleteText,
} = require("../controller/TodoController");
const router = express.Router();

router.post("/todo", createText);
router.get("/todos", getText);
router.delete("/todo/:id", deleteText);
module.exports = router;
