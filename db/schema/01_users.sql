-- Drop and recreate Users table (Example)
DROP TABLE if exists users cascade;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
  -- favourites INTEGER REFERENCE  PRIMARY KEY
);
