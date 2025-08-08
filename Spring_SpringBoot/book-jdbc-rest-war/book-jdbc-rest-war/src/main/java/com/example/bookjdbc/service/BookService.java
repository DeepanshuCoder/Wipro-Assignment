package com.example.bookjdbc.service;

import com.example.bookjdbc.dao.BookDAO;
import com.example.bookjdbc.model.Book;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookDAO dao;

    public BookService(BookDAO dao) {
        this.dao = dao;
    }

    public int addBook(Book book) {
        return dao.save(book);
    }

    public List<Book> getAllBooks() {
        return dao.findAll();
    }

    public Book getBookById(int id) {
        return dao.findById(id);
    }

    public int updateBook(Book book) {
        return dao.update(book);
    }

    public int deleteBook(int id) {
        return dao.delete(id);
    }
}
