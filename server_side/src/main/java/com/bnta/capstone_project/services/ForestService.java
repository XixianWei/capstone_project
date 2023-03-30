package com.bnta.capstone_project.services;

import com.bnta.capstone_project.models.Forest;
import com.bnta.capstone_project.repositories.ForestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ForestService {
    @Autowired
    ForestRepository forestRepository;

    //find all forests
    public List<Forest> getAllForest() {
        return forestRepository.findAll();
    }

    //find a forest by id
    public Optional getForestById(Long id){
        return forestRepository.findById(id);
    }

    //create a forest
    public void saveForest(Forest forest){forestRepository.save(forest);}

    //update a forest
    public Forest updateForest (Forest forest){ return forestRepository.save(forest);}

    //delete a forest by id
    public void deleteForest(Long id) {
        forestRepository.deleteById(id);
    }

}
