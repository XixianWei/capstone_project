package com.bnta.capstone_project.services;

import com.bnta.capstone_project.models.ForestList;
import com.bnta.capstone_project.repositories.ForestListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ForestListService {

    @Autowired
    ForestListRepository forestListRepository;

    //get all lists
    public List<ForestList> getAllForestList() {
        return forestListRepository.findAll();
    }

    //get a list by id
    public Optional getListById(Long id) {
    return forestListRepository.findById(id);
    }

    //create a new list

    public void saveForestList(ForestList forestList) {
    forestListRepository.save(forestList);
    }

    //update a list
    public ForestList updateForestList(ForestList forestList) {
    return forestListRepository.save(forestList);
    }

    //delete a list
    public void deleteForestList(Long id){
    forestListRepository.deleteById(id);
    }
}
