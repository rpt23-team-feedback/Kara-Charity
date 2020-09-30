const mysql = require('mysql');
const conf = require('./config.js');

const connection = mysql.createConnection(conf);

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting to MySQL Charities: ${err}`);
  } else {
    console.log(`Connected to MySQL Charities!`);
  }
});

// for dev use
const getCharities = function(callback) {
  return new Promise((resolve, reject) => {
    const queryStr = `SELECT * FROM charity`;

    connection.query(queryStr, function(err, results) {
      if (err) {
        reject(`Error in querying mySQL by ID: ${err}`);
      } else {
        resolve(results);
      }
    });
  });
};

// for dev use
const getBundles = function(callback) {
  return new Promise((resolve, reject) => {
    const queryStr = `SELECT * FROM bundles`;

    connection.query(queryStr, function(err, results) {
      if (err) {
        reject(`Error in querying mySQL by ID: ${err}`);
      } else {
        resolve(results);
      }
    });
  });
};

// WIP
const getCharitiesById = function(id, callback) {
  return new Promise((resolve, reject) => {
    const queryStr = `SELECT name FROM charity WHERE id = '${id}`;

    connection.query(queryStr, function(err, results) {
      if (err) {
        reject(`Error in querying mySQL by ID: ${err}`);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getCharities,
  getCharitiesById,
  getBundles
};