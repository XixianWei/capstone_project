package com.bnta.capstone_project.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "forest_list")
public class ForestList {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    @OneToMany (mappedBy = "forestList", cascade = CascadeType.ALL)
    @JsonIgnoreProperties ({"forestList"})
    private List<Forest> forests;

    @ManyToOne
    @JoinColumn (name = "user_id")
    @JsonIgnoreProperties ({"forestLists"})
    private User user;


    public ForestList(String title, List<Forest> forests, User user) {
        this.title = title;
        this.forests = new ArrayList<>();
        this.user = user;
    }

    public ForestList() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Forest> getForests() {
        return forests;
    }

    public void setForests(List<Forest> forests) {
        this.forests = forests;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
