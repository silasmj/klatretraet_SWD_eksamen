package com.example.klatretraet_swd_eksamen.models;

import com.sun.istack.Nullable;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Table(name = "notes")
@Entity
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String body;

    @Column
    private String title;

    @Column
    private Date updated;

    @ManyToOne
    @JoinColumn(name = "area_id")
    @Nullable
    private Area area;
}
