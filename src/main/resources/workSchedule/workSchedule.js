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
            <p ondblclick="addInput(this)">${workschedule.employeeName}</p>
        </td>
        <td class="row-workschedule-monday-workhours">
            <p ondblclick="addInput(this)">${workschedule.monday}</p>
        </td>
        <td class="row-workschedule-tuesday-workhours">
            <p ondblclick="addInput(this)">${workschedule.tuesday}</p>
        </td>
         <td class="row-workschedule-wednesday-workhours">
            <p ondblclick="addInput(this)">${workschedule.wednesday}</p>
        </td>
         <td class="row-workschedule-thursday-workhours">
            <p ondblclick="addInput(this)">${workschedule.thursday}</p>
        </td>
         <td class="row-workschedule-friday-workhours">
            <p ondblclick="addInput(this)">${workschedule.friday}</p>
        </td>
         <td class="row-workschedule-delete">
            <button onclick="deleteWorkSchedule(${workschedule.id})">❌</button>
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

function closeInput(elm) {
    var td = elm.parentNode;
    var value = elm.value;
    td.removeChild(elm);
    td.innerHTML = value;
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
}) );*/

/*
var table = document.getElementById("workschedule-tbody");
var rows = table.getElementsByTagName("tr");
for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = function(row) {
        return function() {
            var cell = row.getElementsByTagName("td")[0];
            var id = cell.innerHTML;
            alert("id:" + id);
        };
    };
    currentRow.dblclick = createClickHandler(currentRow);
}

*/

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