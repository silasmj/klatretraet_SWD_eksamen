package com.example.klatretraet_swd_eksamen.controllers;

import com.example.klatretraet_swd_eksamen.DTO.EmployeeEditDTO;
import com.example.klatretraet_swd_eksamen.models.Employee;
import com.example.klatretraet_swd_eksamen.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeRepository employee;

    @GetMapping("/employees")
    public List<Employee> getEmployees(){
        return employee.findAll();
    }

    @GetMapping("/employees/{id}")
    public Employee getEmployeeById(@PathVariable Long id){
        return employee.getById(id);
    }

    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee newEmployee){
        return employee.save(newEmployee);
    }

    @PatchMapping("/employees/{id}")
    public String patchEmployeeById(@PathVariable Long id, @RequestBody Employee employeeToUpdate) {
        return employee.findById(id).map(foundEmployee -> {
            if (employeeToUpdate.getName() != null) foundEmployee.setName(employeeToUpdate.getName());
            if (employeeToUpdate.getImage() != null) foundEmployee.setImage(employeeToUpdate.getImage());
            if (employeeToUpdate.getCalculatedVacation() != 0) foundEmployee.setCalculatedVacation(employeeToUpdate.getCalculatedVacation());
            if (employeeToUpdate.getArea() != null) foundEmployee.setArea(employeeToUpdate.getArea());
            employee.save(foundEmployee);
            return "Medarbejder opdateret";
        }).orElse("Medarbejder ikke fundet");
    }

    @DeleteMapping("/employees/{id}")
    public void deleteEmployeeById(@PathVariable Long id){
        employee.deleteById(id);
    }

}
