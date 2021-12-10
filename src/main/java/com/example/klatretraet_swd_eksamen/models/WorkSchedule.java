package com.example.klatretraet_swd_eksamen.models;

import com.sun.istack.Nullable;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="workschedules")
@Data
public class WorkSchedule {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column
    private Long id;

    @Column
    private String name;

    @Column
    @Nullable
    private String monday;

    @Column
    @Nullable
    private String tuesday;

    @Column
    @Nullable
    private String wednesday;

    @Column
    @Nullable
    private String thursday ;

    @Column
    @Nullable
    private String friday1 ;

    @Column
    @Nullable
    private String friday2;

    @Column
    @Nullable
    private String friday3;

    @Column
    @Nullable
    private String friday4;

}
