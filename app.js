const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");

// connect to my local Database
mongoose.connect("mongodb://localhost/finnDB");

// import a schema
const Student = require("./Student");
run();
async function run() {
  //   const mike = await Student.create({
  //     name: "Mike",
  //     age: 25,
  //     major: "computer science",
  //     origin: "Germany",
  //     hobbies: ["swimming", "drinking"],
  //     address: {
  //       street: "dogosller avenue",
  //     },
  //   });
  //   mike.name = "Leo";
  //   await mike.save();
  // save data
  //   console.log(mike);
  try {
    const user = await Student.where("age")
      .gt("15")
      .where("name")
      .equals("Leo")
      .limit(2)
      .select("age");

    const finn = await Student.create({ name: "Finn", age: 18, origin: "HK" });
    await finn.save();
    // await Student.deleteOne({ name: "Mike" });
    // const mike = await Student.findById('63754ab00479869b6a1074df')
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

// render css files to the server
app.use(express.static("public"));

// render ejs
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// deploy server
app.listen(3000);
