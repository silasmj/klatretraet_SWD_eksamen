const employeeDiv = document.getElementById("employee-div")

fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(result => {
        let terneEmployees = result.filter(employee => employee.area && employee.area.name == 'Ternestuen');
        createEmployeeCard(terneEmployees);
    })

function createEmployeeCard(employees) {
    const cardElement = document.createElement("div")

    cardElement.innerHTML = `
        <p>${employees.name}</p>
        <p>${employees.image}</p>
    `;
    employeeDiv.appendChild(cardElement);

}


