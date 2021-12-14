package com.example.klatretraet_swd_eksamen.DTO;

import com.example.klatretraet_swd_eksamen.models.Employee;
import com.example.klatretraet_swd_eksamen.models.Vacation;

public class VacationDTO {
    public String name;
    public Vacation vacation;
    public boolean failed;
    public String errorMessage;

    public VacationDTO(Vacation vacation, String name){
        this.vacation = vacation;
        this.name = name;


    }

    public VacationDTO(String errorMessage){
        this.errorMessage = errorMessage;
        this.failed = true;
    }
}
