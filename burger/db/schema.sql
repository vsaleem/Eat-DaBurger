drop database if exists burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

DROP TABLE IF exists burgers;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30),
    devoured BOOLEAN,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);