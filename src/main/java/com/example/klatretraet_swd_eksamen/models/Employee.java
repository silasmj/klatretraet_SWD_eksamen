package com.example.klatretraet_swd_eksamen.models;

import com.sun.istack.Nullable;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String area;

    @Column
    private String image;

    @Column
    private double calculatedVacation;

    @ManyToOne
    @JoinColumn(name = "area_id")
    @Nullable
    private Area areas;
}
