require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routesApi = require("./routes/routesApi");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log(" Mongoose Connected successfully");
});

app.use("/api/cruds", routesApi);
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
