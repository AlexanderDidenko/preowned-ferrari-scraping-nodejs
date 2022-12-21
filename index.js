const PORT = 3001;

const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: false, limit: "500mb" }));

const getStats = require("./getStats");

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.get("/xfr/scrap/stats", function(res, req){
  getStats(res, req);
});

app.listen(3001, function(){
  console.log(`App is running: localhost:${PORT} ...`);
});
