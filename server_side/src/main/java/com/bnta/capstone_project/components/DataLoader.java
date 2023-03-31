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
        Forest yellowStone = new Forest("Yellow Stone","USA","add information", forests);
        forestRepository.save(yellowStone);

        Forest plateau = new Forest("Plateau des Tailles", "Houffalize, BELGIUM", "Martin Dellicour\n" +
                "    June 2019 - Early evening on the edge of a wetland in middle of the forest. A wild valley populated by beavers in the Belgian Ardennes...",forests);
        forestRepository.save(plateau);

        Forest haguro = new Forest("Mt Haguro Forest", "Tsuruoka, JAPAN","Mat Eric Hart\n" +
                "        Summer. 17th August 2019. Recording of Mt. Haguro forest ambience standing in front of the ancient Grandpa cedar tree known as Jijisugi (爺杉). The flow of the Haraigawa river can be heard amongst the evening chorus of the various forest wildlife including the evening cicada known as higurashi (茅蜩) (tanna japonensis), and the large brown cicada known as abura-zemi (油蝉) (graptopsaltria nigrofuscata).",forests );
        forestRepository.save(haguro);

        Forest gaio = new Forest("Mirante Gaio","Mirante Gaio, Mato Perso, Rio Grande do Sul, BRAZIL", "Felipe Giongo Krewer\n" +
                "        The recording was made at 10:30 AM, this place is a belvedere called \"Mirante Gaio\", in this place we can see the river Rio das Antas and his turns.\n", forests);

    }


}
