package com.example.orderservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class OrderController {

    private final RestTemplate restTemplate;

    public OrderController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/order")
    public String createOrder() {
        String paymentResponse = restTemplate.getForObject("http://localhost:8082/payment", String.class);
        return "Order processed -> " + paymentResponse;
    }
}
