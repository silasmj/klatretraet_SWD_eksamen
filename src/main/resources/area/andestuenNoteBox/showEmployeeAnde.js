fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(result => {
        let andeEmployees = result.filter(employee => employee.area && employee.area.name == 'Andestuen')
        console.log(andeEmployees)
    })

