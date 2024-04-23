-- Drop and recreate Users table (Example)


CREATE TABLE users (
  UserID INT PRIMARY KEY AUTO_INCREMENT,
  Username VARCHAR(50) UNIQUE NOT NULL,
  Password VARCHAR(100) NOT NULL,
  Email VARCHAR(100) UNIQUE NOT NULL,
  Favourites INT PRIMARY KEY AUTO_INCREMENT
);
