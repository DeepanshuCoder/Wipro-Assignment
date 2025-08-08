package com.example.vendor;

import java.sql.*;

public class DBUtil {
    public static Connection getConnection() throws Exception {
        String url = "jdbc:mysql://localhost:3306/vendor_db";
        String user = "root";
        String pass = "Deepu@2003";
        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection(url, user, pass);
    }
}
