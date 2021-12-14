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
            if (workScheduleToUpdate.getYear() != 0) foundWorkSchedule.setYear(workScheduleToUpdate.getYear());
            if (workScheduleToUpdate.getWeekNumber() != 0) foundWorkSchedule.setWeekNumber(workScheduleToUpdate.getWeekNumber());
            if (workScheduleToUpdate.getEmployeeName() != null) foundWorkSchedule.setEmployeeName(workScheduleToUpdate.getEmployeeName());
            if (workScheduleToUpdate.getMonday() != null) foundWorkSchedule.setMonday(workScheduleToUpdate.getMonday());
            if (workScheduleToUpdate.getTuesday() != null) foundWorkSchedule.setTuesday(workScheduleToUpdate.getTuesday());
            if (workScheduleToUpdate.getWednesday() != null) foundWorkSchedule.setWednesday(workScheduleToUpdate.getWednesday());
            if (workScheduleToUpdate.getThursday() != null) foundWorkSchedule.setThursday(workScheduleToUpdate.getThursday());
            if (workScheduleToUpdate.getFriday() != null) foundWorkSchedule.setFriday(workScheduleToUpdate.getFriday());
            workSchedule.save(foundWorkSchedule);
            return "Found workschedule";
        }).orElse("Workschedule not found");
    }

}
