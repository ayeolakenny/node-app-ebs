const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello From AWS EBS!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
