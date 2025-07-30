package org.example.dao;

import org.example.entity.Author;
import org.example.entity.Book;
import org.hibernate.*;
import org.hibernate.cfg.Configuration;

import java.util.*;

public class BookAuthorDAO {
    private SessionFactory factory = new Configuration().configure().buildSessionFactory();

    public void addBookWithAuthors(String bookTitle, List<String> authorNames) {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();

        Book book = new Book(bookTitle);
        for (String name : authorNames) {
            Author author = new Author(name);
            book.getAuthors().add(author);
            author.getBooks().add(book);
        }

        session.save(book);
        tx.commit();
        session.close();
        System.out.println("Book with authors saved successfully!");
    }

    public void viewAllBooks() {
        Session session = factory.openSession();
        List<Book> books = session.createQuery("from Book", Book.class).list();

        for (Book book : books) {
            System.out.println("Book: " + book.getTitle());
            for (Author author : book.getAuthors()) {
                System.out.println("  Author: " + author.getName());
            }
        }
        session.close();
    }

    public void deleteBook(int bookId) {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        Book book = session.get(Book.class, bookId);
        if (book != null) {
            session.delete(book);
            System.out.println("Book deleted.");
        } else {
            System.out.println("Book not found.");
        }
        tx.commit();
        session.close();
    }
}
