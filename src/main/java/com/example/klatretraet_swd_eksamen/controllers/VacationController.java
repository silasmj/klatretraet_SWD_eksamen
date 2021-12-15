package com.example.klatretraet_swd_eksamen.controllers;

import com.example.klatretraet_swd_eksamen.DTO.VacationDTO;
import com.example.klatretraet_swd_eksamen.models.Area;
import com.example.klatretraet_swd_eksamen.models.Vacation;
import com.example.klatretraet_swd_eksamen.models.WorkSchedule;
import com.example.klatretraet_swd_eksamen.repositories.EmployeeRepository;
import com.example.klatretraet_swd_eksamen.repositories.VacationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VacationController {

    @Autowired
    VacationRepository vacations;

    @Autowired
    EmployeeRepository employees;

    @GetMapping("/vacations")
    public List<Vacation> getVacations(){
        return vacations.findAll();
    }

    @PostMapping("/vacations")
    public Vacation addVacation(@RequestBody Vacation newVacation) {
        //newArea.setArea(null);
        return vacations.save(newVacation);
    }

    @PatchMapping("/vacations/{id}")
    public String updateVacations(@PathVariable Long id, @RequestBody Vacation vacationToUpdate){
        return vacations.findById(id).map(foundVacation -> {
            if (vacationToUpdate.getEarnedVacation() != 0) foundVacation.setEarnedVacation(vacationToUpdate.getEarnedVacation());
            if (vacationToUpdate.getUsedVacation() != 0) foundVacation.setUsedVacation(vacationToUpdate.getUsedVacation());
            if (vacationToUpdate.getCurrentVacation() != 0) foundVacation.setCurrentVacation(vacationToUpdate.getCurrentVacation());
            if (vacationToUpdate.getWeek() != null) foundVacation.setWeek(vacationToUpdate.getWeek());
            if (vacationToUpdate.getEmployeeName() != null) foundVacation.setEmployeeName(vacationToUpdate.getEmployeeName());

            vacations.save(foundVacation);
            return "Found vacation";
        }).orElse("vacation not found");
    }

    @DeleteMapping("/vacations/{id}")
    public void deleteVacationById(@PathVariable Long id){
        vacations.deleteById(id);
    }
}
