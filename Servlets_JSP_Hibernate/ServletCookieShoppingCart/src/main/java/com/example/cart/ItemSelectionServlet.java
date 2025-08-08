package com.example.cart;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;

import java.io.IOException;

public class ItemSelectionServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String[] selectedItems = request.getParameterValues("item");

        if (selectedItems != null) {
            for (String item : selectedItems) {
                Cookie cookie = new Cookie(item, item);
                cookie.setMaxAge(60 * 60); // expires in 1 hour
                response.addCookie(cookie);
            }
        }

        response.setContentType("text/html");
        response.getWriter().println("<h3>Items added to cart successfully!</h3>");
        response.getWriter().println("<a href='index.html'>Go back</a><br>");
        response.getWriter().println("<a href='viewCart'>View Cart</a>");
    }
}
