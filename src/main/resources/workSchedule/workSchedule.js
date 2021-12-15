const workscheduleTableBody = document.getElementById("workschedule-tbody");

function createWorkscheduleTableRow(workschedule) {
    console.log(workschedule)
    const workscheduleTableRow = document.createElement("tr");
    workscheduleTableRow.id = workschedule.id;

    workscheduleTableBody.appendChild(workscheduleTableRow);

    constructWorkscheduleTableRow(workscheduleTableRow, workschedule);
}

function constructWorkscheduleTableRow(workscheduleTableRow, workschedule) {
    workscheduleTableRow.innerHTML = `
        <td class="row-workschedule-name">
            <p>${workschedule.employeeName}</p>
        </td>
        <td class="row-workschedule-monday-workhours">
            <p>${workschedule.monday}</p>
        </td>
        <td class="row-workschedule-tuesday-workhours">
            <p>${workschedule.tuesday}</p>
        </td>
         <td class="row-workschedule-wednesday-workhours">
            <p>${workschedule.wednesday}</p>
        </td>
         <td class="row-workschedule-thursday-workhours">
            <p>${workschedule.thursday}</p>
        </td>
         <td class="row-workschedule-friday-workhours">
            <p>${workschedule.friday}</p>
        </td>
         <td class="row-workschedule-delete">
            <button>❌</button>
        </td>
    `;
}

function createNewWorkSchedule(){
    var weekYear = fetchWeek(offset);

    const newWorkScheduleRow = {
        year: weekYear.year,
        weekNumber: weekYear.number,
        employeeName: "Ikke udfyldt",
        monday: "Ikke udfyldt",
        tuesday: "Ikke udfyldt",
        wednesday: "Ikke udfyldt",
        thursday: "Ikke udfyldt",
        friday: "Ikke udfyldt"
    };
    fetch(baseURL + "/workSchedule", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(newWorkScheduleRow)
    }).then(response => {
        if (response.status === 200) {
            location.reload();
            console.log(response)
            fetchSchedule();
        } else {
            console.log("Vagtplan ikke oprettet", response.status);
        }
    });
}