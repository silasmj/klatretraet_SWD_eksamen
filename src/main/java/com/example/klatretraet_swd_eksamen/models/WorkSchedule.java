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
    private String employeeName;

    @Column
    @Nullable
    private Date date;

    @Column
    @Nullable
    private double startWorkingHour;

    @Column
    @Nullable
    private double endWorkingHour;

}
