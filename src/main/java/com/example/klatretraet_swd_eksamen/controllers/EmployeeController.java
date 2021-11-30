package com.example.klatretraet_swd_eksamen.controllers;

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

    @DeleteMapping("/employees/{id}")
    public void deleteEmployeeById(@PathVariable Long id){
        employee.deleteById(id);
    }

}
