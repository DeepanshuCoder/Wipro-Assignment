package myjdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class jdbcExample {
    public static void main(String[] args) {
        // JDBC URL
        String url = "jdbc:mysql://127.0.0.1:3306/testdb"; // Change 'testdb' to your DB name
        String user = "root";
        String password = "Deepu@2003";

        Connection connection = null;

        try {
            // Load MySQL JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establish the connection
            connection = DriverManager.getConnection(url, user, password);

            // Success message
            System.out.println("✅ Connected to the MySQL database successfully!");

        } catch (ClassNotFoundException e) {
            System.out.println("❌ MySQL JDBC Driver not found.");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("❌ Failed to connect to the database.");
            e.printStackTrace();
        } finally {
            // Close connection
            try {
                if (connection != null) {
                    connection.close();
                    System.out.println("🔌 Connection closed.");
                }
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
    }
}
