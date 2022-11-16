const mongoose = require("mongoose");
const fs = require("fs");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 30 },
  age: Number,
  origin: String,
  major: { type: String, uppercase: true },
  createdAt: { type: Date, default: Date.now() },
  hobbies: [String],
  address: {
    street: String,
    city: String,
  },
});

studentSchema.methods.study = function () {
  console.log(`${this.name}'s major is ${this.major}`);
};

studentSchema.statics.findByName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};
studentSchema.pre("save", async function (next) {
  fs.writeFile("save.text", "data has been saved", (e) => {
    if (e) throw e;
  });
  next();
});

module.exports = mongoose.model("Student", studentSchema);
