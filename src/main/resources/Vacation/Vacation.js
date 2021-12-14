const vacationTableBody = document.getElementById("vacation-tbody");

fetch(baseURL + "/vacations")
    .then(response => response.json())
    .then(vacations => {
       vacations.map(createVacationCard);
    });

function createVacationCard(vacations){
    const vacationsTableRow = document.createElement("tr");
    vacationsTableRow.id = vacations.id;

    vacationTableBody.append(vacationsTableRow);
    constructVacationsTableRow(vacationsTableRow, vacations);

}
function constructVacationsTableRow(vacationsTableRow, vacations){
    vacationsTableRow.innerHTML = `
            <td>
                <p class="row-vacation-earnedVacation">${(vacations.earnedVacation)}</p>
            </td>
            <td>
                <p class="row-vacation-usedVacation">${(vacations.usedVacation)}</p>
            </td>
            <td>
                <p class="row-vacation-currentVacation">${(vacations.currentVacation)}</p>
            </td>
            <td>
                <em class="row-vacation-date">${(vacations.date)}</em>
            </td>
            <td>
                <p class="row-vacation-employeeName">${(vacations.employeeName)}</p>
            </td>
            <td>
                <button id="vacation-update-button-${vacations.id}">📝</button>
                <button onclick="deleteVacation(${vacations.id})">❌</button>           
            </td>
    
    `;
}
function deleteVacation(vacationsId) {
    fetch(baseURL + "/vacations/" + vacationsId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(vacationsId).remove();
        } else {
            console.log(response.status);
        }
    });
}



