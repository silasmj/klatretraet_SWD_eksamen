const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);

function previewFile() {
    let preview = document.querySelector('img');
    let file = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}

function createEmployee() {
        const name = document.getElementById("create-employee-name").value;
        const image = document.getElementById("create-employee-image").value;
        const calculatedVacation = document.getElementById("create-employee-calculatedVacation").value;
        const area = document.getElementById("create-employee-area").value;


    const newEmployee = {
        name: name,
        image: image,
        calculatedVacation: calculatedVacation,
        area: area
    };

    fetch(baseURL + "/employees", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(newEmployee)
    }).then(response => {
        if (response.status === 200) {
            console.log(response)
        } else {
            console.log("Medarbejder ikke oprettet", response.status);
        }
    });
}

/*document.getElementById("create-employee-btn")
    .addEventListener("click", createEmployee);*/


