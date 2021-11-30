package com.example.klatretraet_swd_eksamen.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "areas")
public class Area {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "area", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Comment> comments;

    @JsonIgnore
    @OneToMany(mappedBy = "area", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Employee> employees;
}
