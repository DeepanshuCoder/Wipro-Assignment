package com.example.spring_qualifier_demo;

import org.springframework.stereotype.Component;

@Component("classXYZ")
public class ClassXYZ implements InterfacePQR {
    @Override
    public String display() {
        return "Hi... I am ClassXYZ";
    }
}
