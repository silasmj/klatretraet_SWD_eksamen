const employeeFormParentDiv = document.getElementById("create-employee-form");
const employeeFormExpandButton = document.getElementById("expand-employee-form");

const createEmployeeForm = `<div>
    <label>Name</label>
    <input id="create-employee-name" placeholder="Navn">
    <label>Image</label>
    <input id="create-employee-image" placeholder="Billede">    
    <label>Calculated Vacation</label>
    <input id="create-employee-calculatedVacation" placeholder="Feriedage">    
    <button onclick="removeEmployeeForm()">Annullér</button>
    <button onclick="createEmployee()">Opret en ny medarbejder</button>
</div>`;

function showEmployeeForm() {
    employeeFormExpandButton.style.display = "none";
    employeeFormParentDiv.innerHTML = createEmployeeForm;
}

function removeEmployeeForm() {
    employeeFormExpandButton.style.display = "block";
    employeeFormParentDiv.innerHTML = "";
}

function createEmployee() {
        const name = document.getElementById("create-employee-name").value;
        const image = document.getElementById("create-employee-image").value;
        const calculatedVacation = document.getElementById("create-employee-calculatedVacation").value;


    const newEmployee = {
        name: name,
        image: image,
        calculatedVacation: calculatedVacation
    };

    fetch(baseURL + "/employees", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(newEmployee)
    }).then(response => response.json())
        .then(employee => {
            console.log(employee)
            removeEmployeeForm();
            createEmployeeTableRow(employee);
        }).catch(error => console.log(error));
}

/*document.getElementById("expand-create-employee-btn")
    .addEventListener("click", showEmployeeForm);*/


