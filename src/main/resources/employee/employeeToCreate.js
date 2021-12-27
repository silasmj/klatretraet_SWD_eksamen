const employeesFormDiv = document.getElementById("create-employee-form");
const employeesFormExpandButton = document.getElementById("expand-employee-form");


const createEmployeeForm = `
    <div>
        <label>Navn</label>
        <input id="create-employee-name" placeholder="Navn">
    </div>  
    <div>
        <label>Billede</label>
        <input id="create-employee-image" placeholder="Billede"> 
    </div>
    <div>
        <label>Stue</label>
        <input id="create-employee-area" placeholder="Stue">    
    </div>
    <div>
        <button class="button-3" onclick="createEmployee()">Opret ny medarbejder</button>
        <button class="button-3" onclick="removeEmployeesForm()">Annuler</button>
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
    const areaName = document.getElementById("create-employee-area").value;

    const newArea = {
        name: areaName
    };

    const newEmployee = {
        name: name,
        image: image,
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