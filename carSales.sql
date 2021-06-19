DROP DATABASE IF EXISTS carsales;
CREATE DATABASE IF NOT EXISTS carsales;

USE carsales;

CREATE TABLE IF NOT EXISTS usuarios (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL
    email VARCHAR(30) NOT NULL,
    senha VARCHAR(30) NOT NULL,
);

CREATE TABLE IF NOT EXISTS carros (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    marca VARCHAR(30) NOT NULL,
    modelo VARCHAR(30) NOT NULL,
    ano VARCHAR(30) NOT NULL,
    placa VARCHAR(30) NOT NULL,
    chassi VARCHAR(30) NOT NULL,
    renavam VARCHAR(30) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO usuarios (nome, sobrenome, email, senha)
VALUES ('Rafael', 'Barbosa', 'rafael.devco@gmail.com', '12345678'),
       ('Suzana', 'Guimaraes', 'susugpb@gmail.com', '12345678'),
       ('Paulo', 'Alves', 'paulin56@gmail.com', '12345678');

INSERT INTO carros (usuario_id, marca, modelo, ano, placa, chassi, renavam)
VALUES (1, 'Ferrari', '488', '2020', 'RLF0369', '9RFLH87D8D9375HS6', 'P26478HF78F'),
       (1, 'Lamborghini', 'Urus', '2017', 'PRB0619', '8JMKH87DSNH37HHS5', 'P26478HF78F'),
       (1, 'Aston Martin', 'DB11', '2021', 'SUI1910', 'OL98JH87D8D9375HS', 'P26478HF78F');

SELECT * FROM usuarios;
SELECT * FROM carros;
