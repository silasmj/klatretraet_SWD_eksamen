let filteredEmployees;
let employees;
const employeeDiv = document.getElementById("employee-div")
let area = "Ternestuen";


fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(result => {
       // employees = result.results;
        //filteredEmployees = employees;
        //employees.map(employee => handleFilteredEmployees(employee));
        let terneEmployees = [];
        for (let i = 0; i < result.length; i++) {
            if (result[i].area.name == "Ternestuen") {
                terneEmployees.push(result[i]);
                console.log(terneEmployees);

            }
        }
    })

function handleFilteredEmployees(employee) {
    employeeDiv.innerHTML = "";
    employee.filter(employee => employee.area.name.toLowerCase().includes(area.toLowerCase())).map(createEmployeeCard());


}

function createEmployeeCard(employees) {
    const cardElement = document.createElement("div")

    cardElement.innerHTML = `
        <p>${employees.name}</p>
        <p>${employees.image}</p>
    `;
    employeeDiv.appendChild(cardElement);

}


