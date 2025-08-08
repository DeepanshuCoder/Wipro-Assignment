package com.example.spring_qualifier_demo;

import org.springframework.stereotype.Component;

@Component("classABC")
public class ClassABC implements InterfacePQR {
    @Override
    public String display() {
        return "Hi... I am ClassABC";
    }
}
