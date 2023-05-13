import db from "./connection.js";

// console.log(process.argv);
// const isDeleteMode =
//   process.argv.findIndex((argument) => argument === "delete_mode") === -1
//     ? false
//     : true;

//   db.exec(`DROP TABLE if EXISTS planets;`);
// DDL
db.exec(
  `
CREATE TABLE planets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    size FLOAT,
    is_habitable BOOLEAN NOT NULL
);
`
);

// db.exec(
// `
// CREATE TABLE IF NOT EXISTS people(
//     id INTEGER PRIMARY KEY,
//     name TEXT
// )
// `
// );

// Seeding

  db.run(`INSERT INTO planets (name, is_habitable) VALUES ('Mercury', False);`);
  db.run(`INSERT INTO planets (name, is_habitable) VALUES ('Venus', False);`);
  db.run(`INSERT INTO planets (name, is_habitable) VALUES ('Earth', True);`);
