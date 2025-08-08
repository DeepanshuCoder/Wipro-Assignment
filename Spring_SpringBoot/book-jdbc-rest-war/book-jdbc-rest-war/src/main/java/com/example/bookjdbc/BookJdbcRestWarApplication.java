package com.example.bookjdbc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class BookJdbcRestWarApplication extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(BookJdbcRestWarApplication.class, args);
    }
}
