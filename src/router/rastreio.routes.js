const express = require("express");
const router = express.Router();

const rastreio_controller = require("../controllers/rastreio.controller");

router.get("/", rastreio_controller.getShippingInfo);

module.exports = router;