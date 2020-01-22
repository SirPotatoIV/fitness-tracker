const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const Workout = require("./models/workout");

const app = express();

// Middleware? 
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const db = require("./models");

const API = require("./routes/apiRoutes");
API.api(app);

// require("./routes/api-routes")(app);

require("./routes/htmlRoutes")(app);


// app.post("/submit", ({ body }, res) => {
//   const user = new User(body);
//   user.coolifier();
//   user.makeCool();

//   User.create(user)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// db.Library.create({ name: "Campus Library" })
// .then(dbLibrary => {
//   console.log(dbLibrary);
// })
// .catch(({message}) => {
//   console.log(message);
// });

// app.post("/submit", ({body}, res) => {
// db.Book.create(body)
//   .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//   .then(dbLibrary => {
//     res.json(dbLibrary);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

// app.get("/books", (req, res) => {
// db.Book.find({})
//   .then(dbBook => {
//     res.json(dbBook);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

// app.get("/library", (req, res) => {
// db.Library.find({})
//   .then(dbLibrary => {
//     res.json(dbLibrary);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

// app.get("/populated", (req, res) => {
// db.Library.find({})
//   .populate("books")
//   .then(dbLibrary => {
//     res.json(dbLibrary);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
