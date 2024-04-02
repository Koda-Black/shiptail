const express = require("express");
const shippingController = require("../controllers/shippingController");

const router = express.Router();

router.get("/trackItem", shippingController.trackItem);

module.exports = router;
