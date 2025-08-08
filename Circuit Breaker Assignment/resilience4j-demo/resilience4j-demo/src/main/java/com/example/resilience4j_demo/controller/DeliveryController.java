package com.example.resilience4j_demo.controller;

import com.example.resilience4j_demo.service.DeliveryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeliveryController {

    private final DeliveryService deliveryService;

    public DeliveryController(DeliveryService deliveryService) {
        this.deliveryService = deliveryService;
    }

    @GetMapping("/check-status")
    public String checkDeliveryStatus() {
        return deliveryService.getDeliveryStatus();
    }
}
