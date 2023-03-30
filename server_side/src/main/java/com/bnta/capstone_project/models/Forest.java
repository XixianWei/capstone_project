package com.bnta.capstone_project.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.EnableMBeanExport;

@Entity
@Table(name = "forest")
public class Forest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "location")
    private String location;

    @Column(name = "information")
    private String information;

    @ManyToOne
    @JoinColumn(name="forest_list_id")
    @JsonIgnoreProperties({"forests"})
    private ForestList forestList;


    public Forest( String name, String location, String information, ForestList forestList) {
        this.name = name;
        this.location = location;
        this.information = information;
        this.forestList = forestList;
    }

    public Forest() {
    }

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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getInformation() {
        return information;
    }

    public void setInformation(String information) {
        this.information = information;
    }

    public ForestList getForestList() {
        return forestList;
    }

    public void setForestList(ForestList forestList) {
        this.forestList = forestList;
    }
}
