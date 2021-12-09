function myFunction() {
    var table = document.getElementById("work-schedule-tbody");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    var cell6= row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7)
    var cell9 = row.insertCell(8)

    cell1.innerHTML = "Medarbejder navn";
    cell2.innerHTML = "08:00-15:30";
    cell3.innerHTML = "06:30-12:30";
    cell4.innerHTML = "09:15-17:00";
    cell5.innerHTML = "08:00-16:00";
    cell6.innerHTML = "08:00-15:30";
    cell7.innerHTML = "06:45-12:45";
    cell8.innerHTML = "09:00-16:30";
    cell9.innerHTML = "08:00-16:00";



}

