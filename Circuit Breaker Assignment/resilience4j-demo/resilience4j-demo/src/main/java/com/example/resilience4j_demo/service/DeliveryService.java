package com.example.resilience4j_demo.service;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DeliveryService {

    private final RestTemplate restTemplate = new RestTemplate();

    @CircuitBreaker(name = "deliveryCB", fallbackMethod = "fallbackDeliveryStatus")
    public String getDeliveryStatus() {
        String url = "http://localhost:8081/delivery/status";
        return restTemplate.getForObject(url, String.class);
    }

    public String fallbackDeliveryStatus(Throwable t) {
        return "Fallback: Delivery status is currently unavailable. Please try again later.";
    }
}
