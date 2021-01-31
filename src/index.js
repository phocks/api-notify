const express = require("express");
const app = express();
const port = 65001;

app.get("/notify", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
