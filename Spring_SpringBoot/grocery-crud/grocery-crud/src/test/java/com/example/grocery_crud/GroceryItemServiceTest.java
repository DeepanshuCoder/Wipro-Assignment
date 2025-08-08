package com.example.grocery_crud;

import com.example.grocery_crud.entity.GroceryItem;
import com.example.grocery_crud.repository.GroceryItemRepository;
import com.example.grocery_crud.service.GroceryItemService;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class GroceryItemServiceTest {

    @Test
    void testAddItem() {
        GroceryItemRepository repo = mock(GroceryItemRepository.class);
        GroceryItemService service = new GroceryItemService(repo);

        GroceryItem item = new GroceryItem();
        item.setName("Apple");
        item.setQuantity(5);
        item.setPrice(30.0);

        when(repo.save(item)).thenReturn(item);

        GroceryItem saved = service.addItem(item);
        assertEquals("Apple", saved.getName());
    }
}
