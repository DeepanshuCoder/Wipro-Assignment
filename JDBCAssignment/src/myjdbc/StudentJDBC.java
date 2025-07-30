package myjdbc;

import java.sql.*;
import java.util.*;

public class StudentJDBC {
    public static void main(String[] args) {
        String url = "jdbc:mysql://127.0.0.1:3306/studentdb";
        String user = "root";
        String password = "Deepu@2003";

        List<Student> students = new ArrayList<>();

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection(url, user, password);

            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM Student");

            while (rs.next()) {
                Student s = new Student(
                    rs.getInt("id"),
                    rs.getString("name"),
                    rs.getInt("age"),
                    rs.getString("course"),
                    rs.getDouble("marks")
                );
                students.add(s);
            }

            rs.close();
            stmt.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

        System.out.println("Student Records:");
        students.forEach(Student::display);
    }
}
