const express = require("express");
const router = express.Router();

const getCepInfo = require("../controllers/cep.controller");

router.get("/:cep", getCepInfo.getCepInfo);

module.exports = router;