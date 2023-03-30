package com.bnta.capstone_project.repositories;

import com.bnta.capstone_project.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long> {
}
