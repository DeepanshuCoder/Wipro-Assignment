package com.example.restaurantconsumer.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "restaurant-producer")
public interface ProducerClient {

    @GetMapping("/menu")
    String getMenu();
}
