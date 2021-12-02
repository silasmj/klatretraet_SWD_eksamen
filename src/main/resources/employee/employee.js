const employeeTableBody = document.getElementById("employees-tbody");

fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(employees => {
        employees.map(createEmployeeTableRow);
    });

function createEmployeeTableRow(employee){
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
            <td>
                <button id="update-button-${employee.id}">📝</button>            
                <button onclick="deleteEmployee(${employee.id})">❌</button>            
            </td>    
        `;

}
function deleteEmployee(employeeId) {
    fetch(baseURL + "/employees/" + employeeId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(employeeId).remove();
        } else {
            console.log(response.status);
        }
    });
}