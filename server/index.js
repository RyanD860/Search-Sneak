// Dependencies
require("dotenv").config();
const port = 3183;
const path = require("path");
const express = require("express");
const bp = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");

// Creating App and Configuration
const app = express();
app.use(bp.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 365 * 24 * 60 * 60 * 1000 },
    resave: false,
    saveUninitialized: false
  })
);

// Establish connection to the database
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Connected to db");
  })
  .catch(console.log);

app.listen(port, () => {
  console.log("App is listening on port 3183");
});
