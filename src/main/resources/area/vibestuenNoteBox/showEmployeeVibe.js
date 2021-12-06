fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(result => {
        let vibeEmployees = result.filter(employee => employee.area && employee.area.name == 'Vibestuen');

        console.log(vibeEmployees)
    })