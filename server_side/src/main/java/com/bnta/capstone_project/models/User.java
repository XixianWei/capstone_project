package com.bnta.capstone_project.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "donation")
    private Long donation;

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties({"users"})
    private List<ForestList> forestLists;


    public User(String name, String email, Long donation, List<ForestList> forestLists) {
        this.name = name;
        this.email = email;
        this.donation = donation;
        this.forestLists = new ArrayList<>();
    }

    public User() {
    }
    // getters and setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getDonation() {
        return donation;
    }

    public void setDonation(Long donation) {
        this.donation = donation;
    }

    public List<ForestList> getForestLists() {
        return forestLists;
    }

    public void setForestLists(List<ForestList> forestLists) {
        this.forestLists = forestLists;
    }
}