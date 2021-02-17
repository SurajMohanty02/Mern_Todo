const { model, Schema, Mongoose } = require("mongoose");
const TodoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = model("todo", TodoSchema);
