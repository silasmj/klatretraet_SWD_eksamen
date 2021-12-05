function updateEmployee(employee){
    const tableRowToUpdate = document.getElementById(employee.id)
    tableRowToUpdate.innerHTML = `
        <td>
            <p id="update-employee-id-${employee.id}">${employee.id}</p>
        </td>
        <td>
            <input id="update-employee-name-${employee.id}" value="${(employee.name)}">
        </td>
       <td>
            <input id="update-employee-image-${employee.id}" value="${(employee.image)}">
       </td>
       <td>
            <input id="update-employee-calculated-vacation-${employee.id}" value="${(employee.calculatedVacation)}">
       </td>
       <td>
            <input id="update-employee-area-${employee.id}" value="${(employee.area.name)}">
       </td>
       <td>
            <button id="cancel-update-${employee.id}">✖️</button>
            <button onclick="updateEmployeeBackEnd(${employee.id})">✅</button>
       </td>
      
       `;
    document.getElementById(`cancel-update-${employee.id}`)
        .addEventListener("click", () => undoUpdateTableRow(employee));
}
function undoUpdateTableRow(employee) {
    const employeeTableRow = document.getElementById(employee.id);

    constructEmployeeTableRow(employeeTableRow, employee);
}

function updateEmployeeBackEnd(employeeId){
    const tableRowToUpdate = document.getElementById(employeeId);

    const employeeToUpdate = {
        id: employeeId,
        name: document.getElementById(`update-employee-name-${employeeId}`).value,
        image: document.getElementById(`update-employee-image-${employeeId}`).value,
        calculatedVacation: document.getElementById(`update-employee-calculated-vacation-${employeeId}`).value,
        area: { name: document.getElementById(`update-employee-area-${employeeId}`).value}
    };

    fetch(baseURL + "/employees/" + employeeId, {
        method: "PATCH",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(employeeToUpdate)
    }).then(response => {
        console.log(employeeToUpdate)
        if(response.status === 200){
            constructEmployeeTableRow(tableRowToUpdate, employeeToUpdate);
        }
    });
}

        
