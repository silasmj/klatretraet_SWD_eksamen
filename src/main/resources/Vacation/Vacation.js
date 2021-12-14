let vacationBalance;
let usedVacation;
let sum;

function vacation(){
    vacationBalance = 16;
    usedVacation = 4;
    sum = usedVacation - vacationBalance;

    console.log(sum)

}

document.getElementById("calculate").addEventListener("click", vacation)
