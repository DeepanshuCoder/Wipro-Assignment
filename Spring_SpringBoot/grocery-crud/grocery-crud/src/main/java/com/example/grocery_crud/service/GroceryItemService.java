package com.example.grocery_crud.service;

import com.example.grocery_crud.entity.GroceryItem;
import com.example.grocery_crud.repository.GroceryItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroceryItemService {

    private final GroceryItemRepository repository;

    public GroceryItemService(GroceryItemRepository repository) {
        this.repository = repository;
    }

    public GroceryItem addItem(GroceryItem item) {
        return repository.save(item);
    }

    public GroceryItem getItem(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));
    }

    public List<GroceryItem> getAllItems() {
        return repository.findAll();
    }

    public GroceryItem updateItem(Long id, GroceryItem newItem) {
        GroceryItem existing = getItem(id);
        existing.setName(newItem.getName());
        existing.setQuantity(newItem.getQuantity());
        existing.setPrice(newItem.getPrice());
        return repository.save(existing);
    }

    public void deleteItem(Long id) {
        repository.deleteById(id);
    }
}
