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
        Forest yellowStone = new Forest("Yellowstone","USA","add information", forests);
        forestRepository.save(yellowStone);

        Forest plateau = new Forest("Plateau des Tailles", "Houffalize, BELGIUM", "Martin Dellicour\n" +
                "info  ",forests);
        forestRepository.save(plateau);

        Forest haguro = new Forest("Mt Haguro Forest", "Tsuruoka, JAPAN","Mat Eric Hart\n" +
                "info   ",forests );
        forestRepository.save(haguro);

        Forest gaio = new Forest("Mirante Gaio","Rio Grande do Sul, BRAZIL", "Felipe Giongo Krewer\n" +
                " info", forests);
        forestRepository.save(gaio);

    }


}
