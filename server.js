const express = require("express");
const dotenv = require("dotenv");
const { createServer } = require("http");
const mainRouter = require("./api/router");
const connectDB = require("./api/system/db");
const cors = require("cors");

const app = express();
const server = createServer(app);
require("dotenv").config();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/v1", mainRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log("Express app is listening on port", PORT);
});

module.exports = app;
