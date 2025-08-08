package com.bookstore.dao;

import com.bookstore.model.Book;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class BookDAO {
    private String jdbcURL = "jdbc:mysql://localhost:3306/bookdb";
    private String jdbcUsername = "root";
    private String jdbcPassword = "Deepu@2003"; 

    private static final String SELECT_ALL_BOOKS = "SELECT * FROM book";
    private static final String INSERT_BOOK_SQL = "INSERT INTO book (title, author, price) VALUES (?, ?, ?)";
    private static final String SELECT_BOOK_BY_ID = "SELECT * FROM book WHERE id = ?";
    private static final String UPDATE_BOOK_SQL = "UPDATE book SET title = ?, author = ?, price = ? WHERE id = ?";
    private static final String DELETE_BOOK_SQL = "DELETE FROM book WHERE id = ?";

    protected Connection getConnection() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver"); // ✅ Required for some containers
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);
    }

    public List<Book> listAllBooks() {
        List<Book> books = new ArrayList<>();
        try (Connection connection = getConnection();
             PreparedStatement statement = connection.prepareStatement(SELECT_ALL_BOOKS);
             ResultSet rs = statement.executeQuery()) {

            while (rs.next()) {
                Book book = new Book(
                    rs.getInt("id"),
                    rs.getString("title"),
                    rs.getString("author"),
                    rs.getDouble("price")
                );
                books.add(book);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return books;
    }

    public void insertBook(Book book) {
        try (Connection connection = getConnection();
             PreparedStatement statement = connection.prepareStatement(INSERT_BOOK_SQL)) {

            statement.setString(1, book.getTitle());
            statement.setString(2, book.getAuthor());
            statement.setDouble(3, book.getPrice());
            statement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public Book getBook(int id) {
        Book book = null;
        try (Connection connection = getConnection();
             PreparedStatement statement = connection.prepareStatement(SELECT_BOOK_BY_ID)) {

            statement.setInt(1, id);
            ResultSet rs = statement.executeQuery();

            if (rs.next()) {
                book = new Book(
                    rs.getInt("id"),
                    rs.getString("title"),
                    rs.getString("author"),
                    rs.getDouble("price")
                );
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return book;
    }

    public void updateBook(Book book) {
        try (Connection connection = getConnection();
             PreparedStatement statement = connection.prepareStatement(UPDATE_BOOK_SQL)) {

            statement.setString(1, book.getTitle());
            statement.setString(2, book.getAuthor());
            statement.setDouble(3, book.getPrice());
            statement.setInt(4, book.getId());
            statement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void deleteBook(int id) {
        try (Connection connection = getConnection();
             PreparedStatement statement = connection.prepareStatement(DELETE_BOOK_SQL)) {

            statement.setInt(1, id);
            statement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
