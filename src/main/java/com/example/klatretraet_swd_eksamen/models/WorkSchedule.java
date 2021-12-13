package com.example.klatretraet_swd_eksamen.models;

import com.sun.istack.Nullable;
import lombok.Data;

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
    private String employeeName;

    @Column
    private Date date;

    @Column
    private double startWorkingHour;

    @Column
    private double endWorkingHour;

}
