const express = require("express");
const session = require("express-session");
const massive = require("massive");
const spotsController = require("./spotsController");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

massive(process.env.CONNECTION_STRING)
  .then(database => {
    app.set("db", database);
  })
  .catch(error => {
    console.log("Error with massive", error);
  });

app.get("/api/spots", spotsController.read);

const PORT = process.env.SERVER_PORT || 25565;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT} 🚁`);
});
