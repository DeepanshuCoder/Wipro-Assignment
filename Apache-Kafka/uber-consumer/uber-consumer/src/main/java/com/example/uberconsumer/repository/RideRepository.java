package com.example.uberconsumer.repository;

import com.example.uberconsumer.entity.Ride;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RideRepository extends JpaRepository<Ride, Long> {
}
