package com.example.springbootrestcrud.service;

import com.example.springbootrestcrud.entity.User;
import com.example.springbootrestcrud.exception.UserNotFoundException;
import com.example.springbootrestcrud.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public List<User> getAllUsers() {
        return repo.findAll();
    }

    public User getUserById(Long id) {
        return repo.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    public User createUser(User user) {
        return repo.save(user);
    }

    public User updateUser(Long id, User updatedUser) {
        User user = getUserById(id);
        user.setName(updatedUser.getName());
        user.setAge(updatedUser.getAge());
        user.setSalary(updatedUser.getSalary());
        return repo.save(user);
    }

    public void deleteUser(Long id) {
        if (!repo.existsById(id)) throw new UserNotFoundException(id);
        repo.deleteById(id);
    }
}
