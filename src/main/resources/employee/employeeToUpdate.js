function updateEmployee(employee){
    const tableRowToUpdate = document.getElementById(employee.id)
    tableRowToUpdate.innerHTML = `
      
        <td>
            <input id="update-employee-name-${employee.id}" value="${(employee.name)}">
        </td>
       <td>
            <input id="update-employee-image-${employee.id}" value="${(employee.image)}">
       </td>
    
        <td>
            <select id="update-employee-area-${employee.id}">
                <option "value="${employee.area.name}">Mågestuen</option>
                <option "value="${employee.area.name}">Vibestue </option>
                <option "value="${employee.area.name}">Andestuen</option>
                <option "value="${employee.area.name}">Ternestuen</option>
                <option "value="${employee.area.name}">Ikke tilknyttet en stue</option>
            </select>    
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

        
