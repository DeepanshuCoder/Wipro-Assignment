package com.example.grocery_crud;

import com.example.grocery_crud.controller.GroceryItemController;
import com.example.grocery_crud.service.GroceryItemService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(GroceryItemController.class)
public class GroceryItemControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private GroceryItemService service;

    @Test
    void testGetAllItems() throws Exception {
        mockMvc.perform(get("/api/items")).andExpect(status().isOk());
    }
}
