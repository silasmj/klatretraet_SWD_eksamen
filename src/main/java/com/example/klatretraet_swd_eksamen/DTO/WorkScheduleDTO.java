package com.example.klatretraet_swd_eksamen.DTO;

import com.example.klatretraet_swd_eksamen.models.WorkSchedule;


public class WorkScheduleDTO {
    public WorkSchedule workSchedule;
    public String name;
    public boolean failed;
    public String errorMessage;

    public WorkScheduleDTO(WorkSchedule workSchedule, String name) {
        this.workSchedule = workSchedule;
        this.name = name;
    }

    public WorkScheduleDTO(String errorMessage) {
        this.failed = true;
        this.errorMessage = errorMessage;
    }
}
