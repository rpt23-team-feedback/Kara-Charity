const express = require('express');
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require('../db/index.js');

const app = express();
const port = 3987;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../dist')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// dev use only
app.get('/charity/all', (req, res) => {
  db.getCharities()
    .then((charities) => {
      res.json(charities);
    })
    .catch((err) => {
      console.error(`Error in server response via MySQL: ${err}`);
    })
  });

// dev use only
app.get('/bundles/all', (req, res) => {
  db.getBundles()
    .then((bundles) => {
      res.json(bundles);
    })
    .catch((err) => {
      console.error(`Error in server response via MySQL: ${err}`);
    })
  });

// Array of each charityId linked with a bundle
app.get('/bundles/:bundleId', (req, res) => {
  db.getCharityIdsByBundleId(req.params.bundleId)
    .then((ids) => {
      res.json(ids);
    })
    .catch((err) => {
      console.error(`Error in server response via MySQL: ${err}`);
    })
});

// Get all of a specific charity's info
// Used in the modal
app.get('/charity/:charityId', (req, res) => {
  db.getCharityById(req.params.charityId)
    .then((info) => {
      res.json(info);
    })
    .catch((err) => {
      console.error(`Error in server response via MySQL: ${err}`);
    })
});

// NYI - Modify to access .image property (S3 link)
// app.get('/charity/:charityId/name', (req, res) => {
//   db.getCharityById(req.params.charityId)
//     .then((name) => {
//       res.json(name);
//     })
//     .catch((err) => {
//       console.error(`Error in server response via MySQL: ${err}`);
//     })
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});