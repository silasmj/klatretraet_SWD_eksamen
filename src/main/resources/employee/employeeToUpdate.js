function updateEmployee(employee){
    const tableRowToUpdate = document.getElementById(employee.id)
    tableRowToUpdate.innerHTML = `
        <td>
            <input id="update-employee-area-${employee.id}" value="${(employee.area)}">
        </td>
        <td>
            <input id="update-employee-calculated-vacation-${employee.id}" value="${(employee.calculatedVacation.toString())}">
        </td>
       <td>
            <input id="update-gallery-image-${employee.id}" value="${(employee.image)}">
       </td>
       <td>
            <input id="update-employee-name-${employee.id}" value="${(employee.name)}">
       </td>
       <button onclick="updateEmployeeBackEnd(${employee.id})">✅</button>
       </td>
       <td>
            <button onclick="deleteEmployee(${employee.id})">❌</button>
       </td>
       `;

}

function updateEmployeeBackEnd(employeeId){
    const tableRowToUpdate = document.getElementById(employeeId);

    const employeeToUpdate = {
        id: employeeId,
        area: document.getElementById(`update-employee-area-${employeeId}`).value,
        calculatedVacation: document.getElementById(`update-employee-calculated-vacation-${employeeId}`).value,
        image: document.getElementById(`update-employee-image-${employeeId}`).value,
        name: document.getElementById(`update-employee-name-${employeeId}`).value
    };

    fetch(baseURL + "/employees/" + employeeId, {
        method: "PATCH",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(employeeToUpdate)
    }).then(response => {
        if(response.status === 200){
            constructEmployeeTableRow(tableRowToUpdate, employeeToUpdate);
        }
    });
}

        
