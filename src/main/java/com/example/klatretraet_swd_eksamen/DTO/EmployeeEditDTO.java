package com.example.klatretraet_swd_eksamen.DTO;

import com.example.klatretraet_swd_eksamen.models.Area;
import com.example.klatretraet_swd_eksamen.models.Employee;

public class EmployeeEditDTO {

    public String name;
    public boolean failed;
    public String errorMessage;
    public Employee employee;

    public EmployeeEditDTO(Employee employee, String name){
        this.employee = employee;
        this.name = name;
    }

    public EmployeeEditDTO(String errorMessage){
        this.errorMessage = errorMessage;
        this.failed = true;
    }
}
