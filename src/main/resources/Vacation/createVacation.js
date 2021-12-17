const vacationFormDiv = document.getElementById("create-vacation-form");
const vacationFormExpandButton = document.getElementById("expand-vacation-form");


const createVacationForm = `
    <div>
        <label>Optjent ferie i timer</label>
        <input id="earnedVacation" type="number" placeholder="Timer">
    </div>
    <div>
        <label>Brugt ferie i timer</label>
        <input id="usedVacation" type="number" placeholder="Timer">
    </div>
    <div>
        <label>Ferie i timer</label>
        <input id="currentVacation" type="number" placeholder="Timer">
    </div>
    <div>
        <label>Timer per arbejdsuge</label>
        <input id="hoursPerWeek" type="number" placeholder="Timer">
    </div>
    <div>
        <label>Uge</label>
        <input id="week">
    </div>
    <div>
        <label>Medarbejder navn</label>
        <input id="employeeName" placeholder="Fulde navn">
    </div>
    <div>
        <button class="button-3" onclick="createVacation()">Udregn ny feriesaldo</button>
        <button class="button-3" onclick="removeVacationsForm();">Annuler</button>
    </div>`;


function showVacationsForm() {
    vacationFormExpandButton.style.display = "none";
    vacationFormDiv.innerHTML = createVacationForm;
}

function removeVacationsForm() {
    vacationFormExpandButton.style.display = "block";
    vacationFormDiv.innerHTML = "";
}

function createVacation() {
    const earnedVacation = document.getElementById("earnedVacation").value;
    const usedVacation = document.getElementById("usedVacation").value;
    const currentVacation = document.getElementById("currentVacation").value;
    const hoursPerWeek = document.getElementById("hoursPerWeek").value;
    const week = document.getElementById("week").value;
    const employeeName = document.getElementById("employeeName").value;

    const newVacation = {
        earnedVacation: earnedVacation,
        usedVacation: usedVacation,
        currentVacation: currentVacation,
        hoursPerWeek: hoursPerWeek,
        week: week,
        employeeName: employeeName
    };

    console.log(newVacation)

    fetch(baseURL + "/vacations/", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(newVacation)
    }).then(response => {
        if (response.status === 200) {
            location.reload();
            return false;
            console.log(response)
        } else {
            console.log("Medarbejder ikke oprettet.", response.status);
        }
    });
}

document.getElementById("expand-vacation-form")
    .addEventListener("click", showVacationsForm);
