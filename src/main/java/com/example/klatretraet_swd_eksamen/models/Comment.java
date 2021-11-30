package com.example.klatretraet_swd_eksamen.models;

import com.sun.istack.Nullable;
import lombok.Data;

import javax.persistence.*;

@Data
@Table(name = "comments")
@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String comment;

    @ManyToOne
    @JoinColumn(name = "area_id")
    @Nullable
    private Area area;
}
