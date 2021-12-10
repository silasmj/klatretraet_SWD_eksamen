
const workScheduleFormDiv = document.getElementById("create-work-schedule-form");
const workScheduleFormExpandButton = document.getElementById("show-work-schedule-form");


const createWorkScheduleForm = `<div>
    <label>Navn</label>
    <input id="create-work-schedule-name" placeholder="Navn">
    <label>Mandag</label>
    <input id="create-work-schedule-monday" placeholder="Mandag"> 
    <label>Tirsdag</label>
    <input id="create-work-schedule-tuesday" placeholder="Tirsdag">
    <label>Onsdag</label>
    <input id="create-work-schedule-wednesday" placeholder="Onsdag">
    <label>Torsdag</label>
    <input id="create-work-schedule-thursday" placeholder="Torsdag"> 
    <label>Fredag 1</label>
    <input id="create-work-schedule-friday-1" placeholder="Fredag 1">
    <label>Fredag 2</label>
    <input id="create-work-schedule-friday-2" placeholder="Fredag 2">
    <label>Fredag 3</label>
    <input id="create-work-schedule-friday-3" placeholder="Fredag 3">
    <label>Fredag 4</label>
    <input id="create-work-schedule-friday-4" placeholder="Fredag 4">   
    <button onclick="createWorkSchedule()">Tilføj til vagtplan</button>
</div>`;

function showWorkScheduleForm() {
    workScheduleFormExpandButton.style.display = "none";
    workScheduleFormDiv.innerHTML = createWorkScheduleForm;
}
function removeWorkScheduleForm() {
    workScheduleFormExpandButton.style.display = "block";
    workScheduleFormDiv.innerHTML = "";
}
function createWorkSchedule(){
    const name = document.getElementById("create-work-schedule-name").value;
    const monday = document.getElementById("create-work-schedule-monday").value;
    const tuesday = document.getElementById("create-work-schedule-tuesday").value;
    const wednesday = document.getElementById("create-work-schedule-wednesday").value;
    const thursday = document.getElementById("create-work-schedule-thursday").value;
    const friday1 = document.getElementById("create-work-schedule-friday-1").value;
    const friday2 = document.getElementById("create-work-schedule-friday-2").value;
    const friday3 = document.getElementById("create-work-schedule-friday-3").value;
    const friday4 = document.getElementById("create-work-schedule-friday-4").value;

    const newWorkSchedule = {
        name: name,
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday1: friday1,
        friday2: friday2,
        friday3: friday3,
        friday4: friday4
    };
    console.log(newWorkSchedule)
    fetch(baseURL + "/workSchedule", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(newWorkSchedule)
    }).then(response => {
        if (response.status === 200) {
            location.reload();
            return false;
            console.log(response)
        } else {
            console.log("Vagtplan ikke oprettet", response.status);
        }
    });
}

document.getElementById("show-work-schedule-form")
.addEventListener("click", showWorkScheduleForm);