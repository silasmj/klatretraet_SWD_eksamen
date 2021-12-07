const employeesFormDiv = document.getElementById("create-employee-form");
const employeesFormExpandButton = document.getElementById("expand-employee-form");


const createEmployeeForm = `<div>
    <label>Navn</label>
    <input id="create-employee-name" placeholder="Navn">
    <label>Billede</label>
    <input id="create-employee-image" placeholder="Billede"> 
    <label>Stue</label>
    <input id="create-employee-area" placeholder="Stue">    
    <button onclick="createEmployee()">Create a New Employee</button>
</div>`;




function showEmployeesForm() {
    employeesFormExpandButton.style.display = "none";
    employeesFormDiv.innerHTML = createEmployeeForm;
}

function removeEmployeesForm() {
    employeesFormExpandButton.style.display = "block";
    employeesFormDiv.innerHTML = "";
}

function createEmployee() {
    const name = document.getElementById("create-employee-name").value;
    const image = document.getElementById("create-employee-image").value;
    const calculatedVacation = document.getElementById("create-employee-calculatedVacation").value;
    const areaName = document.getElementById("create-employee-area").value;

    const newArea = {
           name: areaName
        }
        const newEmployee = {
            name: name,
            image: image,
            calculatedVacation: calculatedVacation,
                area: newArea


    };
    console.log(newEmployee)
    fetch(baseURL + "/employees/" + areaName, {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(newEmployee)
    }).then(response => {
        if (response.status === 200) {
            location.reload();
            return false;
            removeEmployeesForm();
            console.log(response)
        } else {
            console.log("Medarbejder ikke oprettet.", response.status);
        }
    });
}

document.getElementById("expand-employee-form")
    .addEventListener("click", showEmployeesForm);
