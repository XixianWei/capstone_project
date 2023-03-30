package com.bnta.capstone_project.services;

import com.bnta.capstone_project.models.User;
import com.bnta.capstone_project.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id){
        return userRepository.findById(id);
    }

    public void saveUser(User user){
        userRepository.save(user);
    }

    public void updateUser(Long id, User newUser) {
        userRepository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setDonation(newUser.getDonation());
                    user.setForestLists(newUser.getForestLists());
                    return userRepository.save(user);
                });
    }

    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }
}