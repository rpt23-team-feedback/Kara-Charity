DROP DATABASE IF EXISTS charities;

CREATE DATABASE charities;

USE charities;

CREATE TABLE charity (
  id int NOT NULL,
  name VARCHAR(40) NOT NULL,
  /* description VARCHAR(1000) NOT NULL, */
  /* image jpeg NOT NULL, */
  /* video ?? , */
  PRIMARY KEY (id)
);

CREATE TABLE bundles (
  id int NOT NULL,
  charity1 int NOT NULL REFERENCES charity(id),
  charity2 int REFERENCES charity(id),
  charity3 int REFERENCES charity(id),
  PRIMARY KEY (id)
);

INSERT into charity (id, name) VALUES (1, "Banana Republic");
INSERT into charity (id, name) VALUES (2, "Kangaroo Court");
INSERT into charity (id, name) VALUES (3, "Snow Job");
INSERT into charity (id, name) VALUES (4, "Bill of Goods");
INSERT into charity (id, name) VALUES (5, "Red Herring");
INSERT into charity (id, name) VALUES (6, "No Behind Left Child");
INSERT into charity (id, name) VALUES (7, "Ice Station Zebra & Associates");
INSERT into charity (id, name) VALUES (8, "Shkreli University");
INSERT into charity (id, name) VALUES (9, "Ferris Bueller You\'re My Hero");

INSERT into bundles (id, charity1, charity2, charity3) VALUES (1, 1, 2, 3);
INSERT into bundles (id, charity1, charity2, charity3) VALUES (2, 2, 3, 4);
INSERT into bundles (id, charity1, charity2, charity3) VALUES (3, 3, 4, 5);
INSERT into bundles (id, charity1, charity2, charity3) VALUES (4, 4, 5, 6);
INSERT into bundles (id, charity1, charity2, charity3) VALUES (5, 5, 6, 7);
INSERT into bundles (id, charity1, charity2, charity3) VALUES (6, 6, 7, 8);
INSERT into bundles (id, charity1, charity2, charity3) VALUES (7, 7, 8, 9);
INSERT into bundles (id, charity1, charity2, charity3) VALUES (8, 8, 9, 1);
INSERT into bundles (id, charity1, charity2, charity3) VALUES (9, 9, 5, 3);
