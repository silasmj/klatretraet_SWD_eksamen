fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(result => {
        let vibeEmployees = [];
        for (let i = 0; i < result.length; i++) {
            if (result[i].area.name == "Vibestuen") {
                vibeEmployees.push(result[i]);
                console.log(vibeEmployees);

            }
        }
    })