package com.example.klatretraet_swd_eksamen.controllers;

import com.example.klatretraet_swd_eksamen.models.WorkSchedule;
import com.example.klatretraet_swd_eksamen.repositories.WorkScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class WorkScheduleController {
    @Autowired
    WorkScheduleRepository workSchedule;

    @GetMapping("/workSchedule")
    public List<WorkSchedule> getWorkSchedule(){
        return workSchedule.findAll();
    }

    @PostMapping("/workSchedule")
    public WorkSchedule createWorkSchedule(@RequestBody WorkSchedule newWorkSchedule){
        newWorkSchedule.setId(null);
        return workSchedule.save(newWorkSchedule);
    }

    @DeleteMapping("workSchedule/{id}")
    public void deleteWorkScheduleById(@PathVariable Long id){
        workSchedule.deleteById(id);
    }


}
