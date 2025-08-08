package com.example.restaurantproducer.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestaurantController {
    @GetMapping("/menu")
    public String getMenu() {
        return "Biryani, Pizza, Burger";
    }
}
