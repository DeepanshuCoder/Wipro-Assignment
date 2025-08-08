package com.example.vendor;

import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class VendorDisplayServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        try (Connection con = DBUtil.getConnection()) {
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM vendors");

            res.setContentType("text/html");
            PrintWriter out = res.getWriter();

            out.println("<h2>Vendor List</h2>");
            out.println("<table border='1'>");
            out.println("<tr><th>ID</th><th>Name</th><th>Location</th></tr>");

            while (rs.next()) {
                out.println("<tr><td>" + rs.getInt("id") + "</td><td>" +
                            rs.getString("name") + "</td><td>" +
                            rs.getString("location") + "</td></tr>");
            }

            out.println("</table>");
        } catch (Exception e) {
            throw new ServletException("Error fetching vendor data", e);
        }
    }
}
