package com.bnta.capstone_project.repositories;


import com.bnta.capstone_project.models.Forest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ForestRepository extends JpaRepository <Forest, Long> {

    //filters
}
