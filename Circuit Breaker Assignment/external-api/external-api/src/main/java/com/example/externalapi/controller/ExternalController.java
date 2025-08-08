package com.example.externalapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExternalController {

    @GetMapping("/delivery/status")
    public String deliveryStatus() {
        return "Order is Out for Delivery!";
    }
}
