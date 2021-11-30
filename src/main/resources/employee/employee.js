const employeeTableBody = document.getElementById("employees-tbody");

fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(employees => {
        employees.map(createEmployee);
    });

function createEmployee(employee){
    const employeeTableRow = document.createElement("tr");
    employeeTableRow.id = employee.id

    employeeTableBody.appendChild(employeeTableRow);
    constructEmployeeTableRow(employeeTableRow, employee);

}

function constructEmployeeTableRow(employeeTableRow, employee){
    employeeTableRow.innerHTML = `
            <td>
                <p class="row-employee-id">${(employee.id)}</p>
            </td>
            <td>
                <p class="row-employee-name">${(employee.name)}</p>
            </td>
            <td>
                <p class="row-employee-image">${(employee.image)}</p>
            </td>
            <td>
                <p class="row-employee-calculatedVacation">${(employee.calculatedVacation.toString())}</p>
            </td>
       
        `;

}