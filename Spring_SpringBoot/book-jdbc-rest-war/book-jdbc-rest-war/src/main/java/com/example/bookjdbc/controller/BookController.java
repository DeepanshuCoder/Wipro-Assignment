package com.example.bookjdbc.controller;

import com.example.bookjdbc.model.Book;
import com.example.bookjdbc.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService service;

    public BookController(BookService service) {
        this.service = service;
    }

    @PostMapping
    public String addBook(@RequestBody Book book) {
        service.addBook(book);
        return "Book added.";
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return service.getAllBooks();
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable int id) {
        return service.getBookById(id);
    }

    @PutMapping("/{id}")
    public String updateBook(@PathVariable int id, @RequestBody Book book) {
        book.setBookid(id);
        service.updateBook(book);
        return "Book updated.";
    }

    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable int id) {
        service.deleteBook(id);
        return "Book deleted.";
    }
}
