

DROP TABLE IF exists burgers;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30),
    devoured BOOLEAN,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);