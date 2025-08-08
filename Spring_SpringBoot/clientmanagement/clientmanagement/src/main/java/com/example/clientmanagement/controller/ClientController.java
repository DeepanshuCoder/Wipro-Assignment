package com.example.clientmanagement.controller;

import com.example.clientmanagement.entity.Client;
import com.example.clientmanagement.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class ClientController {

    @Autowired
    private ClientService service;

    @GetMapping("/")
    public String viewHomePage(Model model) {
        model.addAttribute("listClients", service.getAllClients());
        return "index";
    }

    @GetMapping("/showNewClientForm")
    public String showNewClientForm(Model model) {
        model.addAttribute("client", new Client());
        return "new_client";
    }

    @PostMapping("/saveClient")
    public String saveClient(@ModelAttribute("client") Client client) {
        service.saveClient(client);
        return "redirect:/";
    }

    @GetMapping("/showFormForUpdate/{id}")
    public String showFormForUpdate(@PathVariable Long id, Model model) {
        model.addAttribute("client", service.getClientById(id));
        return "update_client";
    }

    @GetMapping("/deleteClient/{id}")
    public String deleteClient(@PathVariable Long id) {
        service.deleteClient(id);
        return "redirect:/";
    }
}
