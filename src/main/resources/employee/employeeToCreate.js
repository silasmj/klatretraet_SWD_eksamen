const employeesFormDiv = document.getElementById("create-employee-form");
const employeesFormExpandButton = document.getElementById("expand-employee-form");


const createEmployeeForm = `<div>
    <label>Navn</label>
    <input id="create-employee-name" placeholder="Navn">
    <label>Billede</label>
    <input id="create-employee-image" placeholder="Billede">
    <label>Ferie</label>
    <input id="create-employee-calculatedVacation" placeholder="Ferie">    
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
    const area = {areaName: document.getElementById("create-employee-area").value};

        const newEmployee = {
            name: name,
            image: image,
            calculatedVacation: calculatedVacation,
            areaName: area

    };
    fetch(baseURL + "/employees/" + name, {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(newEmployee)
    }).then(response => response.json())
        .then(employee => {
            removeEmployeesForm();
            createEmployeeTable(employee);
        });
}

document.getElementById("expand-employee-form")
    .addEventListener("click", showEmployeesForm);
