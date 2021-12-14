package com.example.klatretraet_swd_eksamen.models;

import lombok.Data;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="workschedules")
@Data
public class WorkSchedule {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column
    private Long id;

    @Column
    @Nullable
    private int year;

    @Column
    @Nullable
    private int weekNumber;

    @Column
    @Nullable
    private String employeeName;

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
    private String thursday;

    @Column
    @Nullable
    private String friday;

}
