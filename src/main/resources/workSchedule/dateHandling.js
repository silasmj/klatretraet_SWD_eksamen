var range = document.getElementById('date_range');
var offset = 0;
let currentdate;

function getWeekNumber(offset) {
    offset = offset || 0;
    var dt = new Date();
    var tdt = new Date(dt.valueOf());
    var dayn = (dt.getDay() + 6) % 7;
    tdt.setDate(tdt.getDate() - dayn + 3);
    var firstThursday = tdt.valueOf();
    tdt.setMonth(0, 1);
    if (tdt.getDay() !== 4) {
        tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
    }
    var result = 1 + Math.ceil((firstThursday - tdt) / 604800000) + offset;
    range.innerHTML = `Uge: ` + result + `, År: ` + dt.getFullYear();
}
function forward() {
    hideElements();
    offset = offset + 1;
    getWeekNumber(offset);
    fetchSchedule(offset);
}

function backward() {
    hideElements();
    offset = offset - 1;
    getWeekNumber(offset);
    fetchSchedule(offset);
}

window.onload = function() {
    getWeekNumber();
    fetchSchedule();
}
function hideElements() {
    var Parent = document.getElementById("workschedule-tbody");
    while(Parent.hasChildNodes())
    {
        Parent.removeChild(Parent.firstChild);
    }
}

function fetchWeek(offset) {
    offset = offset || 0;
    var dt = new Date();
    var tdt = new Date(dt.valueOf());
    var dayn = (dt.getDay() + 6) % 7;
    tdt.setDate(tdt.getDate() - dayn + 3);
    var firstThursday = tdt.valueOf();
    tdt.setMonth(0, 1);
    if (tdt.getDay() !== 4) {
        tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
    }
    var result = 1 + Math.ceil((firstThursday - tdt) / 604800000) + offset;
    return {
        number: result,
        year: dt.getFullYear()
    }
}

function fetchSchedule(offset) {
    fetch(baseURL + "/workSchedule")
        .then(response => response.json())
        .then(result => {
            var weekYear = fetchWeek(offset);
            console.log(weekYear.number + " " + weekYear.year)
            console.log(result)
            const filtered = result.filter(schedule => schedule.year === weekYear.year && schedule.weekNumber === weekYear.number)
            console.log(filtered)
            filtered.map(createWorkscheduleTableRow)
        })
}

