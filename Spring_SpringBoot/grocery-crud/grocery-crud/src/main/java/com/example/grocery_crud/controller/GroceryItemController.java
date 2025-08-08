package com.example.grocery_crud.controller;

import com.example.grocery_crud.entity.GroceryItem;
import com.example.grocery_crud.service.GroceryItemService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
public class GroceryItemController {

    private final GroceryItemService service;

    public GroceryItemController(GroceryItemService service) {
        this.service = service;
    }

    @PostMapping
    public GroceryItem create(@Valid @RequestBody GroceryItem item) {
        return service.addItem(item);
    }

    @GetMapping
    public List<GroceryItem> getAll() {
        return service.getAllItems();
    }

    @GetMapping("/{id}")
    public GroceryItem get(@PathVariable Long id) {
        return service.getItem(id);
    }

    @PutMapping("/{id}")
    public GroceryItem update(@PathVariable Long id, @Valid @RequestBody GroceryItem item) {
        return service.updateItem(id, item);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteItem(id);
    }
}
