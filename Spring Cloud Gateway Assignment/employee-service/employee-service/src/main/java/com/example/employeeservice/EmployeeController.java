package com.example.employeeservice;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @GetMapping("/{id}")
    public String getEmployee(@PathVariable String id, @RequestHeader(value = "X-Request-App", required = false) String header) {
        return "Employee ID: " + id + " | Request Header: " + header;
    }
}
