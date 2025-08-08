package com.example.bookjdbc.dao;

import com.example.bookjdbc.model.Book;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookDAO {

    private final JdbcTemplate jdbc;

    public BookDAO(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    private RowMapper<Book> rowMapper = (rs, rowNum) -> new Book(
        rs.getInt("bookid"),
        rs.getString("bookname"),
        rs.getString("author"),
        rs.getDouble("price")
    );

    public int save(Book book) {
        String sql = "INSERT INTO book (bookname, author, price) VALUES (?, ?, ?)";
        return jdbc.update(sql, book.getBookname(), book.getAuthor(), book.getPrice());
    }

    public List<Book> findAll() {
        return jdbc.query("SELECT * FROM book", rowMapper);
    }

    public Book findById(int id) {
        String sql = "SELECT * FROM book WHERE bookid = ?";
        return jdbc.queryForObject(sql, rowMapper, id);
    }

    public int update(Book book) {
        String sql = "UPDATE book SET bookname=?, author=?, price=? WHERE bookid=?";
        return jdbc.update(sql, book.getBookname(), book.getAuthor(), book.getPrice(), book.getBookid());
    }

    public int delete(int id) {
        return jdbc.update("DELETE FROM book WHERE bookid=?", id);
    }
}
