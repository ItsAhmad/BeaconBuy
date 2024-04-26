CREATE TABLE messages (
  MessageID INT PRIMARY KEY AUTO_INCREMENT,
  SenderID INT,
  OwnerID INT,
  PostID INT,
  MessageText TEXT NOT NULL
)
