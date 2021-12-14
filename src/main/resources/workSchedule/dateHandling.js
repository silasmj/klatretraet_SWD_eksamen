var range = document.getElementById('date_range');
var offset = 0;

function getWeekNumber(offset) {
    offset = offset || 0;
    let currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(),0,1);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    var result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7 + offset);
    if(result > 52) {
        result = 1;
        currentdate.setFullYear(2022);
    }
    range.innerHTML = `Uge: ` + result + `, År: ` + currentdate.getFullYear();
}
function forward() {
    offset = offset + 1;
    getWeekNumber(offset);
}

function backward() {
    offset = offset - 1;
    getWeekNumber(offset);
}


window.onload = function() {
    getWeekNumber();
}

