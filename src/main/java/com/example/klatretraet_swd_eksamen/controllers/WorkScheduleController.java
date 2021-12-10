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
        //newWorkSchedule.setId(null);
        return workSchedule.save(newWorkSchedule);
    }

    @DeleteMapping("/workSchedule/{id}")
    public void deleteWorkScheduleById(@PathVariable Long id){
        workSchedule.deleteById(id);
    }

    @PatchMapping("workSchedule/{id}")
    public String updateWorkSchedule(@PathVariable Long id, @RequestBody WorkSchedule workScheduleToUpdate){
        return workSchedule.findById(id).map(foundWorkSchedule -> {
            if (workScheduleToUpdate.getName() != null) foundWorkSchedule.setName(workScheduleToUpdate.getName());
            if (workScheduleToUpdate.getMonday() != null) foundWorkSchedule.setMonday(workScheduleToUpdate.getMonday());
            if (workScheduleToUpdate.getTuesday() != null) foundWorkSchedule.setTuesday(workScheduleToUpdate.getTuesday());
            if (workScheduleToUpdate.getWednesday() != null) foundWorkSchedule.setWednesday(workScheduleToUpdate.getWednesday());
            if (workScheduleToUpdate.getThursday() != null) foundWorkSchedule.setThursday(workScheduleToUpdate.getThursday());
            if (workScheduleToUpdate.getFriday1() != null) foundWorkSchedule.setFriday1(workScheduleToUpdate.getFriday1());
            if (workScheduleToUpdate.getFriday2() != null) foundWorkSchedule.setFriday2(workScheduleToUpdate.getFriday2());
            if (workScheduleToUpdate.getFriday3() != null) foundWorkSchedule.setFriday3(workScheduleToUpdate.getFriday3());
            if (workScheduleToUpdate.getFriday4() != null) foundWorkSchedule.setFriday4(workScheduleToUpdate.getFriday4());

            workSchedule.save(foundWorkSchedule);
            return "Found workschedule";
        }).orElse("Workschedule not found");
    }

}
