const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const post = require("./post");

mongoose.connect("mongodb://localhost/finnDB");

//schema model query

//create a model for post (map to collection in MongoDB)

// const Mike = new post({ name: "Mike", origin: "Germany" });
// Mike.save();
// post.updateOne({ name: "Mike" }, { name: "Gordy" }).then((dt) => {
//   console.log(dt);
// });
post.find().then((m) => {
  console.log(m);
});
// post
//   .findOneAndUpdate({ name: "finn" }, { name: "Finnnie" }, { new: true })
//   .then((e) => {
//     console.log(e);
//   });

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.listen(3000);
