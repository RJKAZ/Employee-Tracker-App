DROP DATABASE IF EXISTS holidayInn_db;

CREATE DATABASE holidayInn_db;

USE holidayInn_db;

CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  manager_id INTEGER,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER,
  PRIMARY KEY (id),
);

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(30),
  department_id INTEGER,
  PRIMARY KEY (id)
);