const axios = require("axios");
const cheerio = require("cheerio");

const con = require("./db_connection");
const slugs = require("./xfr_slug.json");

var listItems;
var ii = 0;
async function scrapeData(pl, i) {
  try {
    if (pl == 0) {
      const { data } = await axios({
        method: "post",
        url: slugs[i].slug,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      }).catch((err) => {
        throw err;
      });

      const $ = cheerio.load(data);
      listItems = $(".search-result-listing div ol li");

      var sql_txt = "";
      listItems.each((idx, el) => {
        ii++;
        const n_slug = $(el)
          .children("article")
          .children("div")
          .first()
          .children("a")
          .attr("href");
        console.log("n_slug: ", ii, " : ", n_slug);
        sql_txt += `('${n_slug}'),`;
      });
      sql_txt = sql_txt.slice(0, -1);
      var sql = `INSERT INTO fr_list (slug) VALUES ${sql_txt}`;
      con.query(sql, function (err, result) {
        if (err) throw err;
      });
    } else {
      const { data } = await axios({
        method: "post",
        url: slugs[i].slug,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      }).catch((err) => {
        throw err;
      });
      const $ = cheerio.load(data);
      listItems.each((idx, el) => {
        ii++;
        const n_slug = $(el)
          .children("article")
          .children("div")
          .first()
          .children("a")
          .attr("href");

        console.log("n_slug: ", ii, " : ", n_slug);
        sql_txt += `('${n_slug}'),`;
      });
      sql_txt = sql_txt.slice(0, -1);

      var sql = `INSERT INTO fr_list (slug) VALUES ${sql_txt}`;
      con.query(sql, function (err, result) {
        if (err) throw err;
      });
    }
  } catch (err) {
    console.error(err);
  }
}

function getFerrariListPerCountry(i) {
  if (slugs[i].count > 12) {
    const pages = Math.ceil(slugs[i].count / 12);
    for (let pl = 0; pl < pages; pl++) {
      setTimeout(function () {
        scrapeData(pl, i);
      }, 3000);
    }
  } else if (0 < slugs[i].count && slugs[i].count < 13) {
    for (let pl = 0; pl < 1; pl++) {
      setTimeout(function () {
        scrapeData(pl, i);
      }, 3000);
    }
  } else {
    console.log("RESULT: O found");
  }
}

async function getFrrariSlugs(req, res) {
  try {
    for (let i = 0; i < slugs.length; i++) {
      setTimeout(function () {
        getFerrariListPerCountry(i);
      }, (slugs[i].count / 12) * 3500);
    }
    res.send();
  } catch (err) {
    console.error(err);
  }
}

module.exports = getFrrariSlugs;
