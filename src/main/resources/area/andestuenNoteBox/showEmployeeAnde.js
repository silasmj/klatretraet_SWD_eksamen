fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(result => {
        let andeEmployees = [];
        for (let i = 0; i < result.length; i++) {
            if (result[i].area.name == "Andestuen") {
                andeEmployees.push(result[i]);
                console.log(andeEmployees);

            }
        }
    })