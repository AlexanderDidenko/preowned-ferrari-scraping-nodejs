# NodeJS-PreOwned-Ferrari-Scraping © 71

## Description

- The goal of this project is to scrap preowned Ferrari list from https://preowned.ferrari.com

- Save into MySQL database

- Daily update database, ignore save same Ferrari data.


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



