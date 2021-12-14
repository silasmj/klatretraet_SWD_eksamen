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
    private String image;

    @ManyToOne
    @JoinColumn(name = "area_name")
    @Nullable
    private Area area;

    @OneToOne(mappedBy = "employee", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    private Vacation vacation;
}
