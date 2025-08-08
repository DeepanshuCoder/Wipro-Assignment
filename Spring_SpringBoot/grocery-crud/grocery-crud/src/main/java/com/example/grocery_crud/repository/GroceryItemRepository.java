package com.example.grocery_crud.repository;

import com.example.grocery_crud.entity.GroceryItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroceryItemRepository extends JpaRepository<GroceryItem, Long> {
    // No need to write save(), findById(), etc. – JpaRepository provides them all
}
