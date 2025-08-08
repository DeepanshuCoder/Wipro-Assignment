package com.example.springbootrestcrud.repository;

import com.example.springbootrestcrud.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
