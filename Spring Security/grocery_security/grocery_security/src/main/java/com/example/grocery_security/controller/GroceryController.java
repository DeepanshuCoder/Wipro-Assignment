package com.example.grocery_security.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/grocery")
public class GroceryController {

    @GetMapping("/public")
    public String publicEndpoint() {
        return "Welcome to the Grocery Store!";
    }

    @GetMapping("/items")
    public List<String> getItems() {
        return List.of("Apples", "Bananas", "Carrots");
    }

    @GetMapping("/orders")
    public List<String> getOrders() {
        return List.of("Order1", "Order2", "Order3");
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminEndpoint() {
        return "Admin Access Granted!";
    }
}
