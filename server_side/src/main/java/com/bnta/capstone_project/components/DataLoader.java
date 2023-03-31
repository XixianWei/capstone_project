package com.bnta.capstone_project.components;

import com.bnta.capstone_project.repositories.ForestListRepository;
import com.bnta.capstone_project.repositories.ForestRepository;
import com.bnta.capstone_project.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ForestRepository forestRepository;

    @Autowired
    ForestListRepository forestListRepository;

    @Autowired
    UserRepository userRepository;

    public DataLoader(){

    }

    @Override

}
