# PreOwned-Ferrari-Scraping-Cheerio © 71

## Description

- Using Cheerio - Node.js Scraping package

- The goal of this project is to scrap preowned Ferrari list from https://preowned.ferrari.com

- Save into MySQL database

- Daily update database, ignore save same Ferrari data.

![208269017-bbf16c19-efed-40a8-aeaa-37a9f17cc6fb](https://user-images.githubusercontent.com/120116009/209005662-b2b12ce3-87d7-456e-87f0-e775d2147e7d.jpg)


## Install & Start

- Import **frdb.sql**

- install dependencies
```bash
npm install
```

- start
```bash
npm start
```
- Project start "localhost:3001"

- Move into your browser, no need to use Postman


## API

### [ GET: / ]

- Hello World

### [ GET: /xfr/scrap/stats ]

- Get Ferrari Stats and save as "xfr_stats.json"

### [ GET: /xfr/scrap/slug ]

- Get Ferrari slugs per country and save into "xfr_slug.json" and database

### [ Get: /xfr/scrap/detail ]

- Get Ferrari all Ferrari list and save into database

![208269093-8a65e519-42e7-40fe-b43c-47d77275481f](https://user-images.githubusercontent.com/120116009/209005732-d662d048-bd85-4189-bb4f-7670fe73bb76.jpg)


