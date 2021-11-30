package com.example.klatretraet_swd_eksamen.DTO;

import com.example.klatretraet_swd_eksamen.models.Area;

public class EmployeeEditDTO {

    public Long id;
    public String name;
    public String image;
    public double calculatedVacation;
    public Area area;
    public boolean failed;
    public String errorMessage;

    public EmployeeEditDTO(Long id, Area area){
        this.id = id;
        this.area = area;
    }

    public EmployeeEditDTO(String errorMessage){
        this.errorMessage = errorMessage;
        this.failed = true;
    }

}
