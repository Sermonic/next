-- Up
CREATE TABLE Person (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
);

CREATE TABLE Vehicle (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT,
  model TEXT,
  ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person (name, email) values ("Vitalik", "vitalik@gmail.com");
INSERT INTO Person (name, email) values ("Max", "max@gmail.com");

INSERT INTO Vehicle (brand, model, ownerId) values ("Audi", "RS7", 1);
INSERT INTO Vehicle (brand, model, ownerId) values ("Skoda", "Felicia", 1);
INSERT INTO Vehicle (brand, model, ownerId) values ("BMW", "740", 2);

-- Down
DROP TABLE Person;
DROP TABLE Vehicle;
