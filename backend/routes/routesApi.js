const Crud = require("../models/crudModel");
const express = require("express");
const router = express.Router();
const crudController = require("../controller/controlerApi");

router.post("/addData", crudController.createDataFromDb);
router.get("/getData", crudController.getDataFromDb);

module.exports = router;
