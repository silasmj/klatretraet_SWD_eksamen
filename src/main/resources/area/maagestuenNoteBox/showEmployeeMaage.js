fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(result => {
        let maageEmployees = result.filter(employee => employee.area && employee.area.name == 'Mågestuen')
        console.log(maageEmployees)
    })