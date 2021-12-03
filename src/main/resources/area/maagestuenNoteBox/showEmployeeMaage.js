fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(result => {
        let maageEmployees = [];
        for (let i = 0; i < result.length; i++) {
            if (result[i].area.name == "Mågestuen") {
                maageEmployees.push(result[i]);
                console.log(maageEmployees);

            }
        }
    })