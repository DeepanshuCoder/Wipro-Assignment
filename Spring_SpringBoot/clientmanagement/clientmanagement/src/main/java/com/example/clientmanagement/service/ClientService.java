package com.example.clientmanagement.service;

import com.example.clientmanagement.entity.Client;

import java.util.List;

public interface ClientService {
    List<Client> getAllClients();
    Client getClientById(Long id);
    Client saveClient(Client client);
    void deleteClient(Long id);
}
