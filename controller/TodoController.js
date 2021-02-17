const formidable = require("formidable");
const todo = require("../model/TodoModel");
const { body, validationResult } = require("express-validator");

module.exports.createText = async (req, res) => {
  const { title } = req.body;

  try {
    const newTodo = await new todo({
      title: req.body.title,
    });
    newTodo.save();
    return res.status(200).json({ msg: "success", data: newTodo });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.getText = async (req, res) => {
  try {
    const response = await todo.find().sort({ updated: -1 });
    return res.status(200).json({ msg: "allData", data: response });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteText = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await todo.findByIdAndDelete(id);
    return res.status(200).json({ msg: "sucessfully deleted", data: response });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
