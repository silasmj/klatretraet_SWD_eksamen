
function deductVacation(){

    let currentVacation = document.getElementById("currentVacation").value;
    let usedVacation = document.getElementById("usedVacation").value;
    document.getElementById("result").innerHTML = currentVacation - usedVacation;
}
function additionVacation(){

    let currentVacation = document.getElementById("currentVacation").value;
    let earnedVacation = document.getElementById("earnedVacation").value;
    document.getElementById("result").innerHTML = Number(earnedVacation) +Number(currentVacation);
}