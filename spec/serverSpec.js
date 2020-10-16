const mysql = require('mysql');
const express = require("express");
const expect = require('chai').expect;
const httpMocks = require('node-mocks-http');

const app = require('../server/server.js');
// const db = require('../db/index.js');
const schema = require('../db/config.js');
// const port = 7654;

describe('', () => {
  var db, server;

  var dbReset = (connection, tables, done) => {
    let count = 0;
    for (var i = 0; i < tables.length; i++) {
      connection.query(`DROP TABLE IF EXISTS ${tables[i]}`, () => {
        count++;
        if (count === tables.length) {
          return schema(db)
          .then(done);
        }
      });
    }
  };

  beforeEach((done) => {

    let dbTables = ['charity', 'bundles'];
    db = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'charities'
    });

    db.connect((error) => {
      if (error) {
        return done(error);
      }
      dbReset(db, dbTables, () => {
        server = app.listen(7654, done);
      });
    });

    afterEach(() => {
      server.close();
    });
  });

  describe('Database route tests:', () => {

    it('gets a bundles table', (done) => {
      let queryStr = 'SELECT * FROM bundles';
      db.query(queryStr, (err, bundles) => {
        if (err) {
          return done(err);
        }
        expect(bundles).to.deep.equal([]);
        done();
      });
    });

  });

});