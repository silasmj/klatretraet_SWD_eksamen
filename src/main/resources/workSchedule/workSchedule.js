const workscheduleTableBody = document.getElementById("workschedule-tbody");

fetch(baseURL + "/workSchedule")
    .then(response => response.json())
    .then(result => {
        result.map(createWorkscheduleTableRow)
    })

function createWorkscheduleTableRow(workschedule) {
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
            <p>${workschedule.startWorkingHour} - ${workschedule.endWorkingHour}</p>
        </td>
        <td class="row-workschedule-tuesday-workhours">
        
        </td>
         <td class="row-workschedule-wednesday-workhours">
        
        </td>
         <td class="row-workschedule-thursday-workhours">
        
        </td>
         <td class="row-workschedule-friday-workhours">
        
        </td>
         <td class="row-workschedule-delete">
        
        </td>
    `;
}
function addRowToTable() {
    var table = document.getElementById("workschedule-tbody");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = "null";
    cell2.innerHTML = "null";
    cell3.innerHTML = "null";
    cell4.innerHTML = "null";
    cell5.innerHTML = "null";
    cell6.innerHTML = "null";
}