package com.bnta.capstone_project.models;


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