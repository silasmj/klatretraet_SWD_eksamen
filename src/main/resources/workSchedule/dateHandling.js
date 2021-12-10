var range = document.getElementById('date_range');
var offset = 0;
var today = new Date();
var dayOfWeekOffset = today.getDay();
var id_div = setDiv(offset);


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

    range.innerHTML = 'Uge: ' + makeDateString(firstDay) + ' - ' + makeDateString(lastDay);
}


function makeDateString(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var y = date.getFullYear();

    var dateString = dd + '/'+ mm + '/'+ y;
    return dateString;
}

function backward() {
    hide(setDiv(offset));
    offset = offset - 1;
    getWeek(offset);
    setDiv(offset)
    show(setDiv(offset));
}

function forward() {
    hide(setDiv(offset));
    offset = offset + 1;
    getWeek(offset);
    setDiv(offset)
    show(setDiv(offset));

}
function hide(div) {
    console.log(div)
    var x = document.getElementById(div);
    x.style.display = "none";
}

function show(div) {
    console.log(div)
    var x = document.getElementById(div);
    x.style.display = "block";

}

function setDiv(offset) {
    var firstDay = new Date();
    firstDay.setDate(firstDay.getDate() - dayOfWeekOffset + (offset * 7));
    var id_div = makeDateString(firstDay)
    var div = document.getElementsByClassName("work-schedule-div")[0].id = id_div;
    return div;
}

window.onload = function() {
    var element = document.querySelectorAll(".work-schedule-div");
    for (var x = 0; x < element.length; x++){
        element[x].style.display = "none";
    }
    getWeek();
    setDiv(offset)
}

