package com.example.klatretraet_swd_eksamen.controllers;


import com.example.klatretraet_swd_eksamen.models.Area;
import com.example.klatretraet_swd_eksamen.repositories.AreaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AreaController {

    @Autowired
    AreaRepository areas;

    @GetMapping("/areas")
    public List<Area> getAreas() {
        return areas.findAll();
    }

    @PostMapping("/areas")
    public Area addArea(@RequestBody Area newArea) {
    newArea.setName(null);
    return areas.save(newArea);
    }

    @DeleteMapping("/areas/{id}")
    public void deleteAreaById(@PathVariable Long id) {
        areas.deleteById(id);
    }
}
