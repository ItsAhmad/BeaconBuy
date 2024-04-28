const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const getUser = () => {
  return db.query('SELECT * FROM users where username = ;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers };
