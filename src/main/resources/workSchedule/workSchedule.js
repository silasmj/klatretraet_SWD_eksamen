const workscheduleTableBody = document.getElementById("workschedule-tbody");

function createWorkscheduleTableRow(workschedule) {
    const workscheduleTableRow = document.createElement("tr");
    workscheduleTableRow.id = workschedule.id;

    workscheduleTableBody.appendChild(workscheduleTableRow);

    constructWorkscheduleTableRow(workscheduleTableRow, workschedule);

}

function constructWorkscheduleTableRow(workscheduleTableRow, workschedule) {
    workscheduleTableRow.innerHTML = `
        <td class="row-workschedule-name">
            <p id="employee-name-${workschedule.id}" ondblclick="addInput(this)">${workschedule.employeeName}</p>
        </td>
        <td class="row-workschedule-monday-workhours">
            <p id="monday-${workschedule.id}" ondblclick="addInput(this)">${workschedule.monday}</p>
        </td>
        <td class="row-workschedule-tuesday-workhours">
            <p id="tuesday-${workschedule.id}" ondblclick="addInput(this)">${workschedule.tuesday}</p>
        </td>
         <td class="row-workschedule-wednesday-workhours">
            <p id="wednesday-${workschedule.id}" ondblclick="addInput(this)">${workschedule.wednesday}</p>
        </td>
         <td class="row-workschedule-thursday-workhours">
            <p id="thursday-${workschedule.id}" ondblclick="addInput(this)">${workschedule.thursday}</p>
        </td>
         <td class="row-workschedule-friday-workhours">
            <p id="friday-${workschedule.id}" ondblclick="addInput(this)">${workschedule.friday}</p>
        </td>
         <td class="row-workschedule-delete">
            <button onclick="deleteWorkSchedule(${workschedule.id})">❌</button>
        </td>
    `;
}

function createNewWorkSchedule(){
    var weekYear = fetchWeek(offset);
    console.log(weekYear);

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
            console.log(offset);
            hideElements();
            fetchWeek(offset);
            fetchSchedule(offset);

        } else {
            console.log("Vagtplan ikke oprettet", response.status);
        }
    });
}

function closeInput(elm) {
    var td = elm.parentNode;
    var value = elm.value;


    var pdoc = td.parentNode;
    var parentNode = pdoc.parentNode
    console.log(parentNode.id)

    td.removeChild(elm);
    td.innerHTML = value;

    console.log(value)
    var s = document.getElementById(`employee-name-${parentNode.id}`)
    console.log(s.innerText)

    const workScheduleToUpdate = {
        id: parentNode.id,
        employeeName: document.getElementById(`employee-name-${parentNode.id}`).innerText,
        monday: document.getElementById(`monday-${parentNode.id}`).innerText,
        tuesday: document.getElementById(`tuesday-${parentNode.id}`).innerText,
        wednesday: document.getElementById(`wednesday-${parentNode.id}`).innerText,
        thursday: document.getElementById(`thursday-${parentNode.id}`).innerText,
        friday: document.getElementById(`friday-${parentNode.id}`).innerText
    }

    fetch(baseURL + "/workSchedule/" + parentNode.id, {
        method: "PATCH",
        headers: { "Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(workScheduleToUpdate)
    }).then(response => {
        if (response.status === 200){
            console.log(workScheduleToUpdate)
            hideElements()
            fetchSchedule()
        }
    });
}

function addInput(elm) {
    if (elm.getElementsByTagName('input').length > 0) return;
    var value = elm.innerHTML;
    elm.innerHTML = '';

    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', value);
    input.setAttribute('onBlur', 'closeInput(this)');
    elm.appendChild(input);
    input.focus();
    //closeInput(elm);
};

function updateWorkSchedule(workSchedule){
    const tableRowToUpdate = document.getElementById(workSchedule.id)
    tableRowToUpdate.innerHTML = `
    
    `;

}

function deleteWorkSchedule(workScheduleId) {
    fetch(baseURL + "/workSchedule/" + workScheduleId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(workScheduleId).remove();
        } else {
            console.log(response.status);
        }
    });
}

