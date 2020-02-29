//import consola package for console.log() styling 
const consola = require('consola');
//import connection to make queries
const connection = require('../config/connection');

// create a function that returns a promise to handle sql query to get all departments

const getAllDepartments = () => {
  //creates a new "thenable" promise
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM departments', (err, departmentData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(departmentData);
    });
    console.log(getQuery.sql);
  });
};

// create a function that returns a promise to handle sql query to get all roles

const getAllRoles = () => {
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM roles', (err, roleData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(roleData);
    });
    console.log(getQuery.sql);
  });
};

// create a function that returns a promise to handle sql query to get all employees

const getAllEmployees = () => {
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM employees', (err, employeeData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(employeeData);
    });
    console.log(getQuery.sql);
  });
};

//export functions
module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
};

// left off on Saturdays Video at the 51:42 mark