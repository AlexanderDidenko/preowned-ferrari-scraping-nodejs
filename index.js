const PORT = 3001;

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false, limit: "500mb" }));

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.listen(3001, function(){
  console.log(`App is running: localhost:${PORT} ...`);
});
