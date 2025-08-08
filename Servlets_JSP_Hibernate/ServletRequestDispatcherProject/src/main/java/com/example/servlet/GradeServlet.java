package com.example.servlet;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/GradeServlet")
public class GradeServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String name = (String) request.getAttribute("name");
        int marks = Integer.parseInt((String) request.getAttribute("marks"));

        String grade;
        if (marks >= 90) {
            grade = "A+";
        } else if (marks >= 75) {
            grade = "A";
        } else if (marks >= 60) {
            grade = "B";
        } else if (marks >= 40) {
            grade = "C";
        } else {
            grade = "Fail";
        }

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h2>Student Result</h2>");
        out.println("Name: " + name + "<br>");
        out.println("Marks: " + marks + "<br>");
        out.println("Grade: " + grade);
    }
}
