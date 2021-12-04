// Write your solution in this file!
const employee = {};
employee.Name = "Sam";
employee.StreetAddress = "11 Broadway";

function updateEmployeeWithKeyAndValue(employeeObject, key, value){
    const newEmployeeObject = { ...employeeObject };
    newEmployeeObject[key] = value;

    return newEmployeeObject
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value){
    employeeObject[key] = value;

    return employeeObject
}

function deleteFromEmployeeByKey(employeeObject, key){
    const newEmployeeObject = { ...employeeObject };
    delete newEmployeeObject[key];

    return newEmployeeObject
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key){
    delete employeeObject[key];

    return employeeObject
}