const mysql = require('mysql');
const express = require("express");
const app = require('../server/server.js');
const db = require('../db/index.js');
const database = 'charityTest';
// getCharities, getCharityById, getBundles

// TO RUN
// npm test
// first ensure the server is not running

describe('MySQL Functionality', () => {

  const connection = mysql.createConnection({
    user: 'root',
    password: '',
    database: `${database}`
  });

  beforeEach(() => {

    connection.connect((err) => {
      if (err) {
        console.error(`Error connecting to MySQL Charities Test: ${err}`);
      } else {
        console.log(`Successfully connected to MySQL Charities Test!`);
      }
    });

    const initialize = `DROP DATABASE IF EXISTS charitiesTest;
    CREATE DATABASE charitiesTest;
    USE charitiesTest;
    CREATE TABLE charity (
      id int NOT NULL,
      name VARCHAR(40) NOT NULL,
      description TEXT(8000) NOT NULL,
      PRIMARY KEY (id)
    );
    CREATE TABLE bundles (
      id int NOT NULL,
      charity1 int NOT NULL REFERENCES charity(id),
      charity2 int REFERENCES charity(id),
      charity3 int REFERENCES charity(id),
      PRIMARY KEY (id)
    );`

    connection.query(initialize, (err, results) => {
      if (err) {
        console.error(`Query error to MySQL Charities Test`);
      } else {
        console.log(`Successful db query initialization!`);
      }
    });
  });

  afterEach(() => {

    connection.end((err, results) => {
      if (err) {
        console.error(`Query error to MySQL Charities Test`);
      } else {
        console.log(`Closed the connection! This may get a bit spammy.`);
      }
    });

  });

  test('database query function exists', () => {
    expect(typeof db.getCharityById).toEqual('function');
  });

});

