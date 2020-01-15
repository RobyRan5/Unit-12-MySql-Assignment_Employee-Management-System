DROP DATABASE IF EXISTS employeedata_db;

CREATE DATABASE employeedata_db;

USE employeedata_db;

CREATE TABLE department (
    id INTEGER(10) PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(7) NOT NULL,
);

CREATE TABLE roles (
    id INTEGER(10) PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(7) NOT NULL,
    department_id INTEGER(10) AUTO_INCREMENT NOT NULL,
);

 CREATE TABLE employee (
     id INTEGER(10) PRIMARY KEY NOT NULL,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL, 
     role_id INTEGER(10) NOT NULL,
     manager_id INTEGER(10) NOT NULL,
 );

 SELECT * FROM department;
 SELECT * FROM roles;
 SELECT * FROM employee; 
