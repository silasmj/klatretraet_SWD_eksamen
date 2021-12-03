let filteredEmployees;
let employees;
const employeeDiv = document.getElementById("employee-div")


fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(result => {
            console.log(result)
        filteredEmployees = result.filter(employee => employee.area.name.includes(("kurt"))).map(createEmployeeCard)
        console.log(filteredEmployees)
    })

function createEmployeeCard(filteredEmployees) {
    const cardElement = document.createElement("div")

    cardElement.innerHTML = `
        <p>${filteredEmployees.name}</p>
        <p>${filteredEmployees.image}</p>
    `;
    employeeDiv.appendChild(cardElement);

}


