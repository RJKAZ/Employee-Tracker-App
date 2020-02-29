const inquirer = require('inquirer');
require('console.table');

//import connection

const connection = require('./config/connection');

//import functions to work with database

const { getAllDepartments, getAllRoles, getAllEmployees} = require('./lib/db-employees');

//import arrays of questions for inquirer prompts

const { startQuestions, createDepartmentQuestions, createRoleQuestions, createEmployeeQuestions } = require('./lib/prompts');

const startTracker = async () => {
  const { initialAction } = await inquirer.prompt(startQuestions);
// depending on the answer, do an action
  if (initialAction === 'Add a department') {
    createDepartmentQuestions();
  } else if (initialAction === 'Add a role') {
    createRoleQuestions();
  } else if (initialAction === 'Add an employee'){
    createEmployeeQuestions();
  } else {
    connection.end();
  }
};

const createDepartment = async () => {
  const { department_name, department_id } = await inquirer.prompt
  (createDepartmentQuestions);

  const createDepartment = await createDepartmentQuestions({ department_name, department_id});

  console.log(createDepartmentRes);
  return startAuction();
};






//connect to the db and start the app

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to DB');
  startTracker();
});