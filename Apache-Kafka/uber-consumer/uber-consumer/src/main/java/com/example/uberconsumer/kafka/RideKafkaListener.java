package com.example.uberconsumer.kafka;

import com.example.uberconsumer.entity.Ride;
import com.example.uberconsumer.repository.RideRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class RideKafkaListener {

    private final RideRepository rideRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public RideKafkaListener(RideRepository rideRepository) {
        this.rideRepository = rideRepository;
    }

    @KafkaListener(topics = "${app.topic.name:uber-ride-topic}", groupId = "${spring.kafka.consumer.group-id:uber_ride_group}")
    public void listen(String message) {
        try {
            JsonNode node = objectMapper.readTree(message);
            String operation = node.get("operation").asText();
            Long id = node.has("id") ? node.get("id").asLong() : null;

            switch (operation.toUpperCase()) {
                case "CREATE":
                    Ride r = new Ride();
                    r.setId(id);
                    r.setDriverName(node.path("driverName").asText(null));
                    r.setPassengerName(node.path("passengerName").asText(null));
                    r.setPickupLocation(node.path("pickupLocation").asText(null));
                    r.setDropLocation(node.path("dropLocation").asText(null));
                    r.setFare(node.has("fare") ? node.get("fare").asDouble() : null);
                    rideRepository.save(r);
                    break;

                case "UPDATE":
                    if (id != null) {
                        Optional<Ride> existing = rideRepository.findById(id);
                        if (existing.isPresent()) {
                            Ride ex = existing.get();
                            if (node.has("driverName")) ex.setDriverName(node.get("driverName").asText());
                            if (node.has("passengerName")) ex.setPassengerName(node.get("passengerName").asText());
                            if (node.has("pickupLocation")) ex.setPickupLocation(node.get("pickupLocation").asText());
                            if (node.has("dropLocation")) ex.setDropLocation(node.get("dropLocation").asText());
                            if (node.has("fare")) ex.setFare(node.get("fare").asDouble());
                            rideRepository.save(ex);
                        } else {
                            // If not exists, you may choose to create new or log warning
                            Ride newR = new Ride();
                            newR.setId(id);
                            newR.setDriverName(node.path("driverName").asText(null));
                            newR.setPassengerName(node.path("passengerName").asText(null));
                            newR.setPickupLocation(node.path("pickupLocation").asText(null));
                            newR.setDropLocation(node.path("dropLocation").asText(null));
                            newR.setFare(node.has("fare") ? node.get("fare").asDouble() : null);
                            rideRepository.save(newR);
                        }
                    }
                    break;

                case "DELETE":
                    if (id != null) {
                        rideRepository.deleteById(id);
                    }
                    break;

                default:
                    // log or ignore
                    System.out.println("Unknown operation: " + operation);
            }
        } catch (Exception e) {
            e.printStackTrace();
            // In production you should handle exceptions and maybe send to a DLQ
        }
    }
}
