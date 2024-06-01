const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config()();

//var password = encodeURIComponent(process.env.password);
mongoose.connect(
  "mongodb+srv://devkaksha:devkaksha@cluster0.7rrbl.gcp.mongodb.net",
  { dbName: "devkaksha" }
);

const dbConnection = mongoose.connection;

dbConnection.on("connected", () => {
  console.log("DB connected");
});

dbConnection.on("reconnected", () => {
  console.log("DB reconnected");
});

dbConnection.on("disconnected", () => {
  console.log("DB cdisonnected");
});

dbConnection.on("open", () => {
  console.log("DB open");
});

dbConnection.on("error", () => {
  console.log(
    "Error connecting to db validate DATABASE_URL param in .env file or system env variable"
  );
});

dbConnection.on("disconnecting", () => {
  console.log("DB disconnecting");
});

dbConnection.on("close", () => {
  console.log("DB close");
});
