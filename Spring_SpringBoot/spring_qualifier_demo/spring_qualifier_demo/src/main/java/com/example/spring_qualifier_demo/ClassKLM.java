package com.example.spring_qualifier_demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class ClassKLM {

    @Autowired
    @Qualifier("classABC") // Change to "classXYZ" if needed
    private InterfacePQR pqr;

    public String getMessage() {
        return pqr.display();
    }
}
