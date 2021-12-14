package com.example.klatretraet_swd_eksamen.repositories;

import com.example.klatretraet_swd_eksamen.models.Vacation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VacationRepository extends JpaRepository<Vacation, Long> {
}
