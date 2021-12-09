var arr = new Array();

function getTables(){
    var str = localStorage.getItem("localData");
    if(str != null)
        arr = JSON.parse(str);


}
function showTables(){
    getTables();

    var table = document.getElementById("work-schedule-tbody");
    var x = table.rows.length;
    while(--x){
        table.deleteRow(x);
    }
    for(i=0;i<arr.length;i++){
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();
        var cell6 = row.insertCell();
        var cell7 = row.insertCell();
        var cell8 = row.insertCell();
        var cell9 = row.insertCell();

        cell1.innerHTML = arr[i].navn;
        cell2.innerHTML = arr[i].mandag;
        cell3.innerHTML = arr[i].tirsdag;
        cell4.innerHTML = arr[i].onsdag;
        cell5.innerHTML = arr[i].torsdag;
        cell6.innerHTML = arr[i].fredag1;
        cell7.innerHTML = arr[i].fredag2;
        cell8.innerHTML = arr[i].fredag3;
        cell9.innerHTML = arr[i].fredag4;
    }

}

function saveTables(){
    const table = workSchedule.getTables();

}
function deleteData(){
    localStorage.clear();
}
function addTables() {
    getTables();
    arr.push({
        navn: document.getElementById("navn").value,
        mandag: document.getElementById("mandag").value,
        tirsdag: document.getElementById("tirsdag").value,
        onsdag: document.getElementById("onsdag").value,
        torsdag: document.getElementById("torsdag").value,
        fredag1: document.getElementById("fredag1").value,
        fredag2: document.getElementById("fredag2").value,
        fredag3: document.getElementById("fredag3").value,
        fredag4: document.getElementById("fredag4").value

    });
    localStorage.setItem("localData", JSON.stringify(arr));
    showTables();

    /*var table = document.getElementById("work-schedule-tbody");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    var cell6 = row.insertCell(5);
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

    localStorage.setItem("cell1", JSON.stringify(cell1));*/

}

