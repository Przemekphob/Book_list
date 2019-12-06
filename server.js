const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const books = require("./routes/api/books");

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use("/api/books", books);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server starter on ${port}`));
