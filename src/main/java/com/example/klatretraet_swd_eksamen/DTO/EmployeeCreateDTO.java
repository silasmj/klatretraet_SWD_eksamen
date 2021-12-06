package com.example.klatretraet_swd_eksamen.DTO;

import com.example.klatretraet_swd_eksamen.models.Employee;

public class EmployeeCreateDTO {
    public String name;
    public Employee employee;
    public boolean failed;
    public String errorMessage;

    public EmployeeCreateDTO(Employee employee, String name){
        this.employee = employee;
        this.name = name;


    }

    public EmployeeCreateDTO(String errorMessage){
        this.errorMessage = errorMessage;
        this.failed = true;
    }
}
