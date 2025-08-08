package com.example.spring_qualifier_demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringQualifierDemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringQualifierDemoApplication.class, args);
        System.out.println("✅ Application is running on http://localhost:8080/message");
    }
}
