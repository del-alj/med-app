const { Level } = require("level");
const users = require("../src/data/data.js");

const options = {
  valueEncoding: "json",
};

// Create a database
const db = new Level('./database', options);

// Add multiple entries

const list = [];
users.map((user) => {
  list.push({ type: "put", key: user.username, value: user });
});

db.batch(list);

module.exports = db;
