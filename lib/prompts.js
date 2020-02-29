//set up questions for start prompt
const startQuestions = [
  {
    name: 'initialAction',
    message: 'What would you like to do?',
    type: 'list',
    choices: ['Add a department', 'Add a role', 'Add an employee']
  }
];

// set up questions for adding a department 

const createDepartmentQuestions = [
  {
    name: 'department_name',
    message: 'Please type the name of the new department.',
    type: 'input',
    validate: inputVal => (inputVal ? true : false)
  },
  {
    name: 'department_id',
    message: 'Please assign an ID number to this department.',
    type: 'input',
    validate: inputVal => (inputVal ? true : false)
  }
];

//set up questions adding a role

const createRoleQuestions = [
 {
  name: 'role_name',
  message: 'Please type the name of the new role.',
  type: 'input',
  validate: inputVal => (inputVal ? true : false)
 },
 {
   name: 'role_salary',
   message: 'Please type in the starting salary for this role.',
   type: 'input',
   validate: inputVal => (inputVal ? true : false )
 }

];

//set up questions adding an employee

const createEmployeeQuestions = [
  {
   name: 'employee_first_name',
   Message: 'What is the employees first name?',
   type: 'input',
   validate: inputVal => (inputVal ? true : false)
  },
  {
   name: 'employee_last_name',
   message: 'What is the employees lastname?',
   type: 'input',
   validate: inputVal => (inputVal ? true : false)
  },
];

module.exports = { startQuestions, createDepartmentQuestions, createRoleQuestions, createEmployeeQuestions};
