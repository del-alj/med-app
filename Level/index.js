const { Level } = require("level");
// const path = require("path");
const users = require("../src/data/data.js");

// const dbPath = process.env.DB_PATH || path.join(__dirname, "mydb");
const options = {
  valueEncoding: "json",
};

// Create a database
const db = new Level('./db', options);

// Add multiple entries

const list = [];
users.map((user) => {
  list.push({ type: "put", key: user.username, value: user });
});

db.batch(list);

module.exports = db;
