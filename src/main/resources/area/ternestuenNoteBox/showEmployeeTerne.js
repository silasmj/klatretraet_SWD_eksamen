let filteredEmployees;
let employees;

fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(result => {
            console.log(result)
        employees = result;
        filteredEmployees = employees.filter(employee => employee.area.name.toLowerCase().includes(("kurt")))
        console.log(filteredEmployees)
    })

function createEmployeeCard(employee) {
    const employeeElement = document.getElementById("div")
    employeeElement.innerText = employee.name;
    employeeElement.innerText = employee.image;
}


