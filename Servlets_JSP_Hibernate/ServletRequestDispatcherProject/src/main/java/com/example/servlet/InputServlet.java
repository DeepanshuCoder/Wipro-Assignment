package com.example.servlet;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet("/InputServlet")
public class InputServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String name = request.getParameter("name");
        String marks = request.getParameter("marks");

        request.setAttribute("name", name);
        request.setAttribute("marks", marks);

        RequestDispatcher rd = request.getRequestDispatcher("GradeServlet");
        rd.forward(request, response);
    }
}
