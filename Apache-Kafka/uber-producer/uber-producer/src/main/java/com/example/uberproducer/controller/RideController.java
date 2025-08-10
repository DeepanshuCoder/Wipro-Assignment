package com.example.uberproducer.controller;

import com.example.uberproducer.dto.RideDTO;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rides")
public class RideController {

    private final KafkaTemplate<String, String> kafkaTemplate;
    private final ObjectMapper objectMapper;

    @Value("${app.topic.name:uber-ride-topic}")
    private String topic;

    public RideController(KafkaTemplate<String, String> kafkaTemplate, ObjectMapper objectMapper) {
        this.kafkaTemplate = kafkaTemplate;
        this.objectMapper = objectMapper;
    }

    @PostMapping
    public ResponseEntity<String> createRide(@RequestBody RideDTO dto) throws Exception {
        ObjectNode node = objectMapper.createObjectNode();
        node.put("operation", "CREATE");
        node.put("id", dto.getId());
        node.put("driverName", dto.getDriverName());
        node.put("passengerName", dto.getPassengerName());
        node.put("pickupLocation", dto.getPickupLocation());
        node.put("dropLocation", dto.getDropLocation());
        node.put("fare", dto.getFare());
        String msg = objectMapper.writeValueAsString(node);
        kafkaTemplate.send(topic, msg);
        return ResponseEntity.accepted().body("Ride CREATE sent to Kafka");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateRide(@PathVariable Long id, @RequestBody RideDTO dto) throws Exception {
        ObjectNode node = objectMapper.createObjectNode();
        node.put("operation", "UPDATE");
        node.put("id", id);
        node.put("driverName", dto.getDriverName());
        node.put("passengerName", dto.getPassengerName());
        node.put("pickupLocation", dto.getPickupLocation());
        node.put("dropLocation", dto.getDropLocation());
        node.put("fare", dto.getFare());
        String msg = objectMapper.writeValueAsString(node);
        kafkaTemplate.send(topic, msg);
        return ResponseEntity.accepted().body("Ride UPDATE sent to Kafka");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRide(@PathVariable Long id) throws Exception {
        ObjectNode node = objectMapper.createObjectNode();
        node.put("operation", "DELETE");
        node.put("id", id);
        String msg = objectMapper.writeValueAsString(node);
        kafkaTemplate.send(topic, msg);
        return ResponseEntity.accepted().body("Ride DELETE sent to Kafka");
    }

    // optional - proxy to consumer service or return info that consumer holds DB
    @GetMapping("/{id}")
    public ResponseEntity<String> getRideMock(@PathVariable Long id) {
        return ResponseEntity.ok("Consumer service (DB) holds rides. Query consumer at /rides/" + id);
    }
}
