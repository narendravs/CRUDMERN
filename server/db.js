require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
  const connection = mongoose
    .connect(
      "mongodb+srv://narenn185:narenn185@cluster0.0zorq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
      }
    )
    .then((result) => console.log("Connected to database"))
    .catch((err) => console.log("could not connect to database"));
};
