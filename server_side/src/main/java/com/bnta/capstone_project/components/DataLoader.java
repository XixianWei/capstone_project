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
        ForestList forests = new ForestList("forests",new ArrayList<>(),amy);
        forestListRepository.save(forests);

        //Forest
        Forest yellowStone = new Forest("Yellowstone","USA","a vast natural reserve, it is home to a wide variety of wildlife, including grizzly bears, wolves, bison, and elk. ", forests);
        forestRepository.save(yellowStone);

        Forest plateau = new Forest("Plateau des Tailles", "Houffalize, BELGIUM", "Martin Dellicour\n" +
                "features a variety of hiking trails and is known for its panoramic views of the surrounding landscape. ",forests);
        forestRepository.save(plateau);

        Forest haguro = new Forest("Mt Haguro Forest", "Tsuruoka, JAPAN","Mat Eric Hart\n" +
                "home to a centuries-old Shinto shrine and is known for its ancient cedar trees, some of which are over 1,000 years old. ",forests );
        forestRepository.save(haguro);

        Forest gaio = new Forest("Mirante Gaio","Rio Grande do Sul, BRAZIL", "Felipe Giongo Krewer\n" +
                "home to a variety of wildlife, including capuchin monkeys and toucans. ", forests);
        forestRepository.save(gaio);

    }


}
