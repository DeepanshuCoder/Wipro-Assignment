package com.example.spring_requestparam_demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class RegistrationController {

    @GetMapping("/register")
    public String showForm() {
        return "register";
    }

    @PostMapping("/submit")
    public String handleSubmit(@RequestParam String username,
                               @RequestParam String email,
                               @RequestParam String password,
                               @RequestParam String birthday,
                               @RequestParam String profession,
                               Model model) {
        model.addAttribute("username", username);
        model.addAttribute("email", email);
        model.addAttribute("password", password);
        model.addAttribute("birthday", birthday);
        model.addAttribute("profession", profession);
        return "success";
    }
}
