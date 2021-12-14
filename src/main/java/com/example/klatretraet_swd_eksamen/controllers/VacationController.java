package com.example.klatretraet_swd_eksamen.controllers;

import com.example.klatretraet_swd_eksamen.DTO.VacationDTO;
import com.example.klatretraet_swd_eksamen.models.Vacation;
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

    @PostMapping("/vacations/{id}")
    public VacationDTO createVacation(@PathVariable Long id, @RequestBody Vacation vacationToCreate) {
        return employees.findById(id).map(employee -> {
                    vacationToCreate.setId(null);
                    vacationToCreate.setEmployee(employee);
                    Vacation createdVacation = vacations.save(vacationToCreate);
                    return new VacationDTO(createdVacation, vacationToCreate.getEmployee().getName());
                }
        ).orElse(new VacationDTO("Did not find the employee by id"));
    }

    @DeleteMapping("/vacations/{id}")
    public void deleteVacationById(@PathVariable Long id){
        vacations.deleteById(id);
    }
}
