package com.example.klatretraet_swd_eksamen.models;

import lombok.Data;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.Date;

@Data
@Table(name = "vacation")
@Entity
public class Vacation {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column
    private double earnedVacation;

    @Column
    private double usedVacation;

    @Column
    private double currentVacation;

    @Column
    private Date date;

    @Nullable
    @OneToOne
    @JoinColumn(name = "employee_name")
    private Employee employee;
}
