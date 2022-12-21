const fs = require("fs");
const con = require("./db_connection");

const ferrari_statistic = require("./xfr_stats.json");

const slug_infos = [];

function getSlugs() {
  ferrari_statistic.filters.countries.options.map((el, idx) => {
    // To convert region to slug (NA => north-america)
    const region_slug = ferrari_statistic.filters.regions.options.find((e) => {
      return e.slug == el.region ? el.region : undefined;
    });

    if (region_slug != undefined)
      slug_infos.push({
        slug:
          "https://preowned.ferrari.com/en-US/r/" +
          region_slug.slugSeo +
          "/used-ferrari/" +
          el.slugSeo +
          "/rfc",
        region: el.region,
        country: el.name,
        cou_slug: el.slug,
        count: el.count,
      });
  });
}

getSlugs();

function writeSlugAsJSON() {
  fs.writeFile("xfr_slug.json", JSON.stringify(slug_infos, null, 2), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}

async function getSlugDetail(req, res) {
  var currdate = new Date();

  var current =
    currdate.getFullYear() +
    "-" +
    (currdate.getMonth() + 1) +
    "-" +
    currdate.getDate() +
    " " +
    currdate.getHours() +
    ":" +
    currdate.getMinutes();

  con.connect(function (err) {
    if (err) throw err;
    var sql_txt = "";
    slug_infos.map((el, idx) => {
      if (el.count > 0) {
        sql_txt += `('${el.slug}','${el.region}','${el.country}','${el.cou_slug}',${el.count},'${current}'),`;
      } else {
        sql_txt += "";
      }
    });
    sql_txt = sql_txt.slice(0, -1);
    var sql = `INSERT INTO fr_slug (slug, region, country, cou_slug, count, created_at) VALUES ${sql_txt}`;

    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send("Slug details saved into frdb")
    });
  });

  writeSlugAsJSON();
}

module.exports = getSlugDetail;