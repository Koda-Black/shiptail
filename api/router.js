const express = require("express");
const router = express.Router();
const authRouter = require("./routes/authRouter.js");
const shippingRouter = require("./routes/shippingRouter.js");
const verifyToken = require("./middlewares/verifyAuthToken.js");

router.get("/", (req, res) => {
  res.send({ message: "Shiptail Api" });
});

router.use("/auth", authRouter);

router.use("/shipping", verifyToken, shippingRouter);

module.exports = router;
