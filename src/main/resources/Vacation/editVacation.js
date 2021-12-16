function updateVacation(vacation){
    const tableRowToUpdate = document.getElementById(vacation.id)
    tableRowToUpdate.innerHTML = `
      
        <td>
            <input type="number" id="update-vacation-earned-vacation-${vacation.id}" value="0"/>
        </td>
       <td>
            <input type="number" id="update-vacation-used-vacation-${vacation.id}" value="0">
       </td>
        <td>
            <input type="number" id="update-vacation-current-vacation-${vacation.id}" value="${(vacation.currentVacation)}">  
        </td>
        <td>
            <input id="update-vacation-hours-per-week-${vacation.id}" value="${(vacation.hoursPerWeek)}">  
        </td>
        <td>
            <input id="update-vacation-week-${vacation.id}" value="${(vacation.week)}">  
        </td>
        <td>
            <input id="update-vacation-employee-name-${vacation.id}" value="${(vacation.employeeName)}">  
        </td>
       <td>
            <button id="cancel-update-${vacation.id}" onclick="hideEdit()">❌</button>
            <button onclick="updateVacationBackEnd(${vacation.id})">✅</button>
       </td>

       `;
    document.getElementById(`cancel-update-${vacation.id}`)
        .addEventListener("click", () => undoUpdateTableRow(vacation));
}
function undoUpdateTableRow(vacation) {
    const vacationTableRow = document.getElementById(vacation.id);

    constructVacationsTableRow(vacationTableRow, vacation);
}

function updateVacationBackEnd(vacationId){
    hideEdit();
    const tableRowToUpdate = document.getElementById(vacationId);
    var x = parseInt(document.getElementById(`update-vacation-used-vacation-${vacationId}`).value);
    var z = parseInt(document.getElementById(`update-vacation-earned-vacation-${vacationId}`).value);
    var currentVacation = document.getElementById(`update-vacation-current-vacation-${vacationId}`).value;
    var udregning = (currentVacation - x) + z;
    console.log(udregning)

    const vacationToUpdate = {
        id: vacationId,
        earnedVacation: document.getElementById(`update-vacation-earned-vacation-${vacationId}`).value,
        usedVacation: document.getElementById(`update-vacation-used-vacation-${vacationId}`).value,
        currentVacation: udregning,
        hoursPerWeek: document.getElementById(`update-vacation-hours-per-week-${vacationId}`).value,
        week: document.getElementById(`update-vacation-week-${vacationId}`).value,
        employeeName: document.getElementById(`update-vacation-employee-name-${vacationId}`).value

    };

    fetch(baseURL + "/vacations/" + vacationId, {
        method: "PATCH",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(vacationToUpdate)
    }).then(response => {
        console.log(vacationToUpdate)
        if(response.status === 200){
            constructVacationsTableRow(tableRowToUpdate, vacationToUpdate);
        }
    });
}
function calcular(){
    var valor1 = parseInt(document.getElementById('update-vacation-used-vacation-').value);
    var valor2 = parseInt(document.getElementById('update-vacation-earned-vacation-').value);
    document.getElementById('update-vacation-current-vacation-').value = valor1 + valor2;
}

function deductBy(){
    let usedVacation = document.getElementById('row-vacation-usedVacation');
    let currentVacation = document.getElementById('row-vacation-currentVacation');
    document.getElementById('update-vacation-currentVacation').value = usedVacation - currentVacation;
}

