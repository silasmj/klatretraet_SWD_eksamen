
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
                <p class="row-vacation-currentVacation">${(vacations.currentVacation)}</p>
            </td>
            <td>
                <p class="row-vacation-hoursPerWeek">${(vacations.hoursPerWeek)}</p>
            </td>
            <td>
                <em class="row-vacation-week">${(vacations.week)}</em>
            </td>
            <td>
                <p class="row-vacation-employeeName">${(vacations.employeeName)}</p>
            </td>
            <td>
                <button id="vacation-update-button-${vacations.id}" onclick="showEdit()">📝</button>
                <button onclick="deleteVacation(${vacations.id})">❌</button>  
            </td>
    
    `;
    document.getElementById(`vacation-update-button-${vacations.id}`)
        .addEventListener("click", () => updateVacation(vacations));
}

function showEdit() {
    document.getElementById("earned-vacation").style.display = "block";
    document.getElementById("used-vacation").style.display = "block";
}

function hideEdit() {
    document.getElementById("earned-vacation").style.display = "none";

    document.getElementById("used-vacation").style.display = "none";
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

window.onload = hideEdit();




