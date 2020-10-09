const mysql = require('mysql');
// const conf = require('./config.js');
// const Promise = require('bluebird');
const database = 'charities';

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: `${database}`
});

// const db = Promise.promisifyAll(connection);

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting to MySQL Charities: ${err}`);
  } else {
    console.log(`Successfully connected to MySQL Charities!`);
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

// access all of a given charity's info, for the modal
const getCharityById = function(id, callback) {
  return new Promise((resolve, reject) => {
    const queryStr = `SELECT name FROM charity WHERE id = ${id}`;

    connection.query(queryStr, function(err, results) {
      if (err) {
        reject(`Error in querying mySQL by ID: ${err}`);
      } else {
        resolve(results);
      }
    });
  });
};


// db.connectAsync()
//   .then(() => {
//     console.log(`Connected to MySQL Charities!`)
//   })
//   .then(() => {
//     db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`)
//   })
//   .then(() => {
//     db.queryAsync(`USE ${database}`)
//   })
//   .then(() => {
//     conf(db)
//   })
  // .then(() => {
  //   db.queryAsync(`INSERT INTO charity (id, name, description) VALUES ('1','Parker-Erdman','Sunt quod autem et et et distinctio. Aut est eum omnis mollitia explicabo quia nulla voluptatibus. Amet consequatur saepe unde iure. Corporis nam doloribus nihil quas ut consequatur. Aliquam perferendis in debitis reprehenderit dolorum.'),
  //   [...]
  // .catch(() => {
  //   console.log('Is it here?');
  // })

module.exports = {
  getCharities,
  getCharityById,
  getBundles
};