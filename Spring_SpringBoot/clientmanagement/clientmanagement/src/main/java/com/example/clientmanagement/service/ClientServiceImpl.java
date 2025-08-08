package com.example.clientmanagement.service;

import com.example.clientmanagement.entity.Client;
import com.example.clientmanagement.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {

    @Autowired
    private ClientRepository repository;

    public List<Client> getAllClients() {
        return repository.findAll();
    }

    public Client getClientById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Client saveClient(Client client) {
        return repository.save(client);
    }

    public void deleteClient(Long id) {
        repository.deleteById(id);
    }
}
