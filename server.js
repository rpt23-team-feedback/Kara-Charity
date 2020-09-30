const express = require('express');
const Promise = require('bluebird');
const bodyParser = require('body-parser');

const db = require('./db/index.js');

const app = express();
const port = 3987;

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Seed script:
// mysql -u root < schema.sql

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// note: this route is UNUSED in the component itself!
// only for verifying seeding
app.get('/charity/all', (req, res) => {
  db.getCharities()
    .then((charities) => {
      res.json(charities);
    })
    .catch((err) => {
      console.error(`Error in server response via MySQL: ${err}`);
    })
  });

app.get('/bundles/all', (req, res) => {
  db.getBundles()
    .then((bundles) => {
      res.json(bundles);
    })
    .catch((err) => {
      console.error(`Error in server response via MySQL: ${err}`);
    })
  });

  // WIP!!!
app.get('/charity/:charityId/names', (req, res) => {
  db.getCharitiesById(req.body.id)
    .then((names) => {
      res.json(names);
    })
    .catch((err) => {
      console.error(`Error in id-based response via MySQL: ${err}`);
    })
});
