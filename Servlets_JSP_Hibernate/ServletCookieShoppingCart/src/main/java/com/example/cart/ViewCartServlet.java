package com.example.cart;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;

import java.io.IOException;

public class ViewCartServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Cookie[] cookies = request.getCookies();

        response.setContentType("text/html");
        response.getWriter().println("<h2>Your Shopping Cart:</h2>");

        boolean hasItems = false;

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (!cookie.getName().equals("JSESSIONID")) {
                    hasItems = true;
                    response.getWriter().println("<li>" + cookie.getValue() + "</li>");
                }
            }
        }

        if (!hasItems) {
            response.getWriter().println("<p>No items in your cart.</p>");
        }

        response.getWriter().println("<br><a href='index.html'>Back to Shopping</a>");
    }
}
