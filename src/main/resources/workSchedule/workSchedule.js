function myFunction() {
    var table = document.getElementById("work-schedule-tbody");
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
    var range = document.getElementById('date_range');
    var offset = 0;
    var today = new Date();
    var dayOfWeekOffset = today.getDay();
    var id;

    cell1.innerHTML = "Medarbejder navn";
    cell2.innerHTML = "08:00-15:30";
    cell3.innerHTML = "06:30-12:30";
    cell4.innerHTML = "09:15-17:00";
    cell5.innerHTML = "08:00-16:00";
    cell6.innerHTML = "08:00-15:30";
    cell7.innerHTML = "06:45-12:45";
    cell8.innerHTML = "09:00-16:30";
    cell9.innerHTML = "08:00-16:00";

    function getWeek(offset) {
        offset = offset || 0; // if the function did not supply a new offset, the offset is 0
        var firstDay = new Date();
        firstDay.setDate(firstDay.getDate() - dayOfWeekOffset + (offset * 7));
        // .setDate() sets the date (1-31) of the current month.
        // The beginning of the week is:
        //    today's date (firstDay.getDate())
        //    minus the day of week offset to get us back to sunday (dayOfWeekOffset)
        //    plus the number of days we need to offset for future / past weeks (offset * 7)

        var lastDay = new Date(firstDay);
        lastDay.setDate(lastDay.getDate() + 6);
        // the last day is the first day plus 6

        console.log(makeDateString(firstDay), makeDateString(lastDay));
        range.innerHTML = 'Uge: ' + makeDateString(firstDay) + ' - ' + makeDateString(lastDay);
    }


    function makeDateString(date) {
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var y = date.getFullYear();

        var dateString = dd + '/' + mm + '/' + y;
        return dateString;

    }

    function backward() {
        offset = offset - 1;
        getWeek(offset);
        let div = document.getElementsByClassName("tbody");
        div.id = "tbody_div_" /*+ ;*/
        console.log(div.id)
    }

    function forward() {
        offset = offset + 1;
        getWeek(offset);
        let div = document.getElementsByClassName("tbody");
        div.id = "tbody_div_" /*+ ;*/
        console.log(div.id)
    }

    window.onload = function () {
        getWeek();
    }


    cell1.innerHTML = "x";
    cell2.innerHTML = "Medarbejder navn";
    cell3.innerHTML = "x";
    cell4.innerHTML = "x";
    cell5.innerHTML = "x";
    cell6.innerHTML = "x";
    cell7.innerHTML = "x";
    cell8.innerHTML = "x";
    cell9.innerHTML = "x"
};



/*
 function myFunctionn() {
    var row = document.getElementById("myRow");
    var x = row.insertCell(-1);
    x.innerHTML = "Ny tid";
}*/