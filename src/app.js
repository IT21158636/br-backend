const express = require("express");
const cors = require("cors");
const registrationRoutes = require("./routes/registrationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/business-registration", registrationRoutes);

app.get("/", (_, res) => {
  res.send("Business Registration API is running");
});

module.exports = app;
