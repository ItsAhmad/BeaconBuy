CREATE TABLE posts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  boat_title VARCHAR(100) NOT NULL,
  boat_description TEXT NOT NULL,
  boat_price DECIMAL(10, 2)
)
