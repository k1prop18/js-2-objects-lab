// Write your solution in this file!
const employee = {
    name: 'John Doe',
  streetAddress: '123 Main Street',
};

  
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const clone = Object.assign({}, employee);
    clone[key] = value;
    return clone;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const clone = Object.assign({}, employee);
    delete clone[key];
    return clone;
  }
  
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  