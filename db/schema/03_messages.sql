CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  senderid INT,
  ownerid INT,
  postid INT,
  MessageText TEXT NOT NULL
)
