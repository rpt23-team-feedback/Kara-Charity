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

// dev/testing use only
app.get('/charity/all', (req, res) => {
  db.getCharities()
    .then((charities) => {
      res.json(charities);
    })
    .catch((err) => {
      console.error(`Error in server response via MySQL: ${err}`);
    })
  });

// dev/testing use only
// will refactor into an initial database seeder (calling to remote proxy)
app.get('/bundles/all', (req, res) => {
  db.getBundles()
    .then((bundles) => {
      res.json(bundles);
    })
    .catch((err) => {
      console.error(`Error in server response via MySQL: ${err}`);
    })
  });

// Currently *also* standing-in for "/charity/:bundleId/images"
app.get('/charity/:bundleId/names', (req, res) => {
  db.getCharityById(req.params.bundleId)
    .then((names) => {
      res.json(names);
    })
    .catch((err) => {
      console.error(`Error in server response via MySQL: ${err}`);
    })
});

// Currently mocked until S3 images - this will be for external routes that only need the image
// app.get('/charity/:bundleId/image', (req, res) => {
//   db.getCharitiesById(req.params.bundleId)
//     .then((image) => {
//       res.json(image);
//     })
//     .catch((err) => {
//       console.error(`Error in server response via MySQL: ${err}`);
//     })
// });

// Array of each charityId linked with a bundle
// app.get('/charity/:bundleId', (req, res) => {
//   db.getCharitiesById(req.params.bundleId)
//     .then((names) => {
//       res.json(names);
//     })
//     .catch((err) => {
//       console.error(`Error in server response via MySQL: ${err}`);
//     })
// });

// All of a single charity's info, for the modal
app.get('/charity/:charityId', (req, res) => {
  db.getCharityById(req.params.charityId)
    .then((info) => {
      res.json(info);
    })
    .catch((err) => {
      console.error(`Error in server response via MySQL: ${err}`);
    })
});
