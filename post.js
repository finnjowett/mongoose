const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, origin: String, required: true, default: 18 },
  scholorship: {
    merit: Number,
    others: Number,
  },
});

module.exports = mongoose.model("Post", postSchema);
