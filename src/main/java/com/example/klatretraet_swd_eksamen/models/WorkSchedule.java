package com.example.klatretraet_swd_eksamen.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="workschedule")
@Data
public class WorkSchedule {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private String monday;

    @Column
    private String tuesday;

    @Column
    private String wednesday;

    @Column
    private String thursday ;

    @Column
    private String friday1 ;

    @Column
    private String friday2;

    @Column
    private String friday3;

    @Column
    private String friday4;



}
