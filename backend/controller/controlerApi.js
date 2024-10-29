const Crud = require("../models/crudModel");

// Display All CRUD Data
const getDataFromDb = async (req, res) => {
  try {
    const crud = await Crud.find();
    // console.log(crud);
    return res.json(crud);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
};

// Create New CRUD
const createDataFromDb = async (req, res) => {
  let crud = await new Crud(req.body);

  crud
    .save()
    .then((crud) => {
      res.send(crud);
    })
    .catch(function (err) {
      res.status(422).send("Crud add failed");
    });
};

module.exports = {
  getDataFromDb,
  createDataFromDb,
};
