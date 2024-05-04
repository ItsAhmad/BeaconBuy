const db = require("../connection");

const getCurrentPostId = async () => {
  const getId = await db.query("SELECT currval('id') FROM posts;").then((data) => {
    return data.rows;
  });
  console.log("GETID: ", getId)
  return db.query("SELECT user_id, boat_title, boat_description, boat_price, image_url FROM posts WHERE id = $1;", [getId]).then(res => {
    return res;
  }).catch(err => console.log(err.stack));
};

module.exports = { getCurrentPostId };
