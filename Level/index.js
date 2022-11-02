const { Level } = require("level");
const users = require("../src/data/data.js");

export const database = () => {

  const options = {
    valueEncoding: "json",
  };
  
  // Create a database
  const db = new Level('./database', options);
  // const dbusers = db.sublevel('users')
  // Add multiple entries
  
  const list = [];
  users.map((user) => {
    list.push({type: "put", key: user.username, value: user });
  });
  
  db.batch(list);

  return db;
}

