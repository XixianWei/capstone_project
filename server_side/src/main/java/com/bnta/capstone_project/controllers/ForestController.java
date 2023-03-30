package com.bnta.capstone_project.controllers;

import com.bnta.capstone_project.models.Forest;
import com.bnta.capstone_project.models.ForestList;
import com.bnta.capstone_project.services.ForestListService;
import com.bnta.capstone_project.services.ForestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/forests")
public class ForestController {

    @Autowired
    ForestService forestService;

    @Autowired
    ForestListService forestListService;

    //get all forests
    @GetMapping
    public ResponseEntity<List<Forest>> getAllForest(){
        List<Forest> forests = forestService.getAllForest();
        return new ResponseEntity<>(forests, HttpStatus.OK);
    }

    //get a forest by id
    @GetMapping(value= "/{id}")
    public ResponseEntity<Forest> getForestById(@PathVariable Long id){
        Optional<Forest> forest = forestService.getForestById(id);
        if(forest.isPresent()){
            return new ResponseEntity<>(forest.get(),HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    // add a new forest
    @PostMapping("/{forestListId}")
    public ResponseEntity<Forest> newForest(@RequestBody Forest forest, @PathVariable Long forestListId) {
        Optional<ForestList> forestList = forestListService.getListById(forestListId);
        if(forestList.isPresent()){
            ForestList forestList1 = forestList.get();
            forest.setForestList(forestList1);
            forestService.saveForest(forest);
            return new ResponseEntity<>(forest, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    //update a forest by id
    @PutMapping(value = "{id}")
    public ResponseEntity<Forest> updateForest(@RequestBody Forest forest, @PathVariable Long id){
        forest.setId(id);
        forestService.updateForest(forest);
        return new ResponseEntity<>(forest,HttpStatus.OK);
    }
    
    //delete a forest by id
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Long> deleteToDo(@PathVariable Long id) {
        forestService.deleteForest(id);
        return new ResponseEntity<>(id,HttpStatus.OK);
    }
}
