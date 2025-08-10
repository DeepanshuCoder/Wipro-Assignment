package com.example.uberconsumer.controller;

import com.example.uberconsumer.entity.Ride;
import com.example.uberconsumer.repository.RideRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rides")
public class RideController {

    private final RideRepository rideRepository;

    public RideController(RideRepository rideRepository) {
        this.rideRepository = rideRepository;
    }

    @GetMapping
    public List<Ride> getAll() {
        return rideRepository.findAll();
    }

    @GetMapping("/{id}")
    public Ride getOne(@PathVariable Long id) {
        Optional<Ride> r = rideRepository.findById(id);
        return r.orElse(null);
    }
}
