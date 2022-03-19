DROP DATABASE IF EXISTS movie_database;
CREATE DATABASE movie_database;

USE movie_database;

CREATE TABLE movies_table (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title TEXT,
  watched CHAR(1)
);


INSERT INTO movies_table VALUES (null, 'Titanic', 'n');
INSERT INTO movies_table VALUES (null, 'The Terminator', 'n');
INSERT INTO movies_table VALUES (null, 'Avatar', 'y');
INSERT INTO movies_table VALUES (null, 'Saving Private Ryan', 'y');
-- mysql -u root < server/schema.sql