package com.example.spring_qualifier_demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

    private final ClassKLM klm;

    public MessageController(ClassKLM klm) {
        this.klm = klm;
    }

    @GetMapping("/message")
    public String showMessage() {
        return klm.getMessage();
    }
}
