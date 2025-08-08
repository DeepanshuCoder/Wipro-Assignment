package com.example.restaurantconsumer.controller;

import com.example.restaurantconsumer.feign.ProducerClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConsumerController {

    @Autowired
    private ProducerClient client;

    @GetMapping("/consume")
    public String consumeMenu() {
        return "Consumer calls: " + client.getMenu();
    }
}
