package com.bnta.capstone_project.components;

import com.bnta.capstone_project.models.Forest;
import com.bnta.capstone_project.models.ForestList;
import com.bnta.capstone_project.models.User;
import com.bnta.capstone_project.repositories.ForestListRepository;
import com.bnta.capstone_project.repositories.ForestRepository;
import com.bnta.capstone_project.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

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
    public void run(ApplicationArguments args) throws Exception {
        //User
        User amy = new User("Amy", "amy@gmail.com", 10L,new ArrayList<>());
        userRepository.save(amy);


        //Lists
        ForestList forests = new ForestList("Temperate Forests",new ArrayList<>(),amy);
        forestListRepository.save(forests);

        Forest yellowStone = new Forest("Yellowstone","USA","a vast natural reserve, it is home to a wide variety of wildlife, including grizzly bears, wolves, bison, and elk. ", forests);
        forestRepository.save(yellowStone);

        Forest haguro = new Forest("Mt Haguro Forest", "JAPAN","Mat Eric Hart\n" +
                "home to a centuries-old Shinto shrine and is known for its ancient cedar trees, some of which are over 1,000 years old. ",forests);
        forestRepository.save(haguro);

        Forest plateau = new Forest("Plateau des Tailles", "BELGIUM", "Martin Dellicour\n" +
                "features a variety of hiking trails and is known for its panoramic views of the surrounding landscape. ",forests);
        forestRepository.save(plateau);

        Forest black = new Forest("Black Forest", "GERMANY", "Home to the Black Forest beetle, capercaillie and the elusive lynx. These elusive cats were hunted to near extinction in the region, but conservation efforts have led to their reintroduction in recent years. ",forests );
        forestRepository.save(black);


        //Subtropical Forests Lists
        ForestList subtropicalForests = new ForestList("Subtropical Forests",new ArrayList<>(),amy);
        forestListRepository.save(subtropicalForests);

        Forest gaio = new Forest("Mirante Gaio","BRAZIL", "Felipe Giongo Krewer\n" +
                "home to a variety of wildlife, including capuchin monkeys and toucans. ", subtropicalForests);
        forestRepository.save(gaio);

        Forest laurel = new Forest("Laurel Forest", "SPAIN", "A subtropical cloud forest on the islands of Tenerife, La Palma, and Gomera, known for its diverse flora and fauna. ",forests );
        forestRepository.save(laurel);


        //Tropical Forests Lists
        ForestList tropicalForests = new ForestList("Tropical Forests",new ArrayList<>(),amy);
        forestListRepository.save(tropicalForests);

        //Boreal Forests Lists
        ForestList borealForests = new ForestList("Boreal Forests",new ArrayList<>(),amy);
        forestListRepository.save(borealForests);

    }


}
