const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./../config/dbConnection");

// All route imports here
// const course = require("./routes/course");
const subjects = require("./routes/subjects");

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello world");
});

// http.createServer(app).listen(8080, () => {
//   console.log("Server is listening on port 8080");
// });

// https.createServer(app).listen(43, () => {
//   console.log("Server is listening on port 43");
// });

// app.use("/course", course);
app.use("/subjects", subjects);

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
