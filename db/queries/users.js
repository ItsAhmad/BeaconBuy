const db = require('../connection');

const getUserByUserData = (userData) => {
  return db.query('SELECT * FROM users WHERE username = $1 AND password = $2;', [userData.username, userData.password])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUserByUserData };
