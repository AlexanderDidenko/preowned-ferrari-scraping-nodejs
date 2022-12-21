const axios = require("axios");
const fs = require("fs");

const url = "https://preowned.ferrari.com/api/v1/search";

async function getStats(res, req) {
  try {
    const { data } = await axios.post(url);

    fs.writeFile(
      "xfr_stats.json",
      JSON.stringify(data.results, null, 2),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        req.send("Stats exported as xfr_stats.json");
      }
    );
  } catch (err) {
    console.error(err);
  }
}

module.exports = getStats;