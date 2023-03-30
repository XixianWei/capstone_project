package com.bnta.capstone_project.controllers;

import com.bnta.capstone_project.models.ForestList;
import com.bnta.capstone_project.services.ForestListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/forest-lists")
public class ForestListController {

    @Autowired
    private ForestListService forestListService;

    @GetMapping
    public ResponseEntity<List<ForestList>> getAllForestLists() {
        List<ForestList> forestLists = forestListService.getAllForestList();
        return new ResponseEntity<>(forestLists, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ForestList> getForestListById(@PathVariable Long id) {
        Optional<ForestList> forestList = forestListService.getListById(id);
        if (forestList.isPresent()) {
            return new ResponseEntity<>(forestList.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<ForestList> createForestList(@RequestBody ForestList forestList) {
        forestListService.saveForestList(forestList);
        return new ResponseEntity<>(forestList, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ForestList> updateForestList(@PathVariable Long id, @RequestBody ForestList forestList) {
        Optional<ForestList> existingForestList = forestListService.getListById(id);
        if (existingForestList.isPresent()) {
            forestList.setId(id);
            forestListService.updateForestList(forestList);
            return new ResponseEntity<>(forestList, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteForestList(@PathVariable Long id) {
        Optional<ForestList> forestList = forestListService.getListById(id);
        if (forestList.isPresent()) {
            forestListService.deleteForestList(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}