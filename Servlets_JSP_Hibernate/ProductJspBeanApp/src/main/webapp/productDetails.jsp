<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ page import="com.example.model.Product" %>
<jsp:useBean id="product" class="com.example.model.Product" scope="request"/>
<jsp:setProperty property="*" name="product"/>

<html>
<head><title>Product Info</title></head>
<body>
    <h2>Product Details Submitted</h2>
    <p><strong>ID:</strong> <jsp:getProperty property="productId" name="product"/></p>
    <p><strong>Name:</strong> <jsp:getProperty property="name" name="product"/></p>
    <p><strong>Price:</strong> <jsp:getProperty property="price" name="product"/></p>
    <p><strong>Quantity:</strong> <jsp:getProperty property="quantity" name="product"/></p>
</body>
</html>
