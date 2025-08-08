package com.example.grocery_crud;

import com.example.grocery_crud.entity.GroceryItem;
import com.example.grocery_crud.service.GroceryItemService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class GroceryItemIntegrationTest {

    @Autowired
    private GroceryItemService service;

    @Test
    void testAddAndGetItem() {
        GroceryItem item = new GroceryItem();
        item.setName("Rice");
        item.setQuantity(5);
        item.setPrice(100.0);

        GroceryItem saved = service.addItem(item);
        GroceryItem fetched = service.getItem(saved.getId());

        assertEquals("Rice", fetched.getName());
    }
}
