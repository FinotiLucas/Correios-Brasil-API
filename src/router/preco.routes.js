const express = require("express");
const router = express.Router();

const preco_controller = require("../controllers/preco.controller");

router.get("/", preco_controller.getPrice);

module.exports = router;