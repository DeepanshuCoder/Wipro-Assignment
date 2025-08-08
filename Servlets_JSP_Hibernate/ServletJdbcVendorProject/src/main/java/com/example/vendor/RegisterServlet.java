package com.example.vendor;

import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class RegisterServlet extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        try (Connection con = DBUtil.getConnection()) {
            String sql = "INSERT INTO users (fullname, email, password, birthday, gender, profession, married) VALUES (?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement pst = con.prepareStatement(sql);
            pst.setString(1, req.getParameter("fullname"));
            pst.setString(2, req.getParameter("email"));
            pst.setString(3, req.getParameter("password"));
            pst.setString(4, req.getParameter("birthday"));
            pst.setString(5, req.getParameter("gender"));
            pst.setString(6, req.getParameter("profession"));
            pst.setBoolean(7, req.getParameter("married") != null);

            pst.executeUpdate();

            res.setContentType("text/html");
            PrintWriter out = res.getWriter();
            out.println("<h2>Registration successful!</h2>");
            out.println("<a href='vendorList'>View Vendors</a>");
        } catch (Exception e) {
            throw new ServletException("DB Error", e);
        }
    }
}
