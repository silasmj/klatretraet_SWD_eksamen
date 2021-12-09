function myFunction() {
    var table = document.getElementById("work-schedule-tbody");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(0);
    var cell3 = row.insertCell(1)
    var cell4 = row.insertCell(2)
    var cell5 = row.insertCell(3)
    var cell6= row.insertCell(4);
    var cell7 = row.insertCell(5);
    var cell8 = row.insertCell(6)
    var cell9 = row.insertCell(7)


function makeDateString(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var y = date.getFullYear();

    var dateString = mm + '/'+ dd + '/'+ y;
    return dateString;

}

function backward() {
    offset = offset - 1;
    getWeek(offset);
}

function forward() {
    offset = offset + 1;
    getWeek(offset);
}

window.onload = function() {
    getWeek();
}

function hideAndShowTable() {
    document.getElementsByClassName("")
}
    cell1.innerHTML = "x";
    cell2.innerHTML = "Medarbejder navn";
    cell3.innerHTML = "x";
    cell4.innerHTML = "x";
    cell5.innerHTML = "x";
    cell6.innerHTML = "x";
    cell7.innerHTML = "x";
    cell8.innerHTML = "x";
    cell9.innerHTML = "x";

}
/*
 function myFunctionn() {
    var row = document.getElementById("myRow");
    var x = row.insertCell(-1);
    x.innerHTML = "Ny tid";
}*/