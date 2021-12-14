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
    @GetMapping("/workSchedule/{id}")
    public WorkSchedule getWorkScheduleById(@PathVariable Long id){
        return workSchedule.findById(id).get();
    }

    @PostMapping("/workSchedule")
    public WorkSchedule createWorkSchedule(@RequestBody WorkSchedule newWorkSchedule){
        newWorkSchedule.setId(null);
        return workSchedule.save(newWorkSchedule);
    }

    @DeleteMapping("/workSchedule/{id}")
    public void deleteWorkScheduleById(@PathVariable Long id){
        workSchedule.deleteById(id);
    }

    @PatchMapping("workSchedule/{id}")
    public String updateWorkSchedule(@PathVariable Long id, @RequestBody WorkSchedule workScheduleToUpdate){
        return workSchedule.findById(id).map(foundWorkSchedule -> {
            if (workScheduleToUpdate.getEmployeeName() != null) foundWorkSchedule.setEmployeeName(workScheduleToUpdate.getEmployeeName());
            if (workScheduleToUpdate.getDate() != null) foundWorkSchedule.setDate(workScheduleToUpdate.getDate());
            if (workScheduleToUpdate.getStartWorkingHour() != 0) foundWorkSchedule.setStartWorkingHour(workScheduleToUpdate.getStartWorkingHour());
            if (workScheduleToUpdate.getEndWorkingHour() != 0) foundWorkSchedule.setEndWorkingHour(workScheduleToUpdate.getEndWorkingHour());
            workSchedule.save(foundWorkSchedule);
            return "Found workschedule";
        }).orElse("Workschedule not found");
    }

}
