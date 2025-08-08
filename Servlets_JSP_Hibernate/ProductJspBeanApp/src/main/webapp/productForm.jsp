<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<html>
<head><title>Enter Product</title></head>
<body>
    <h2>Enter Product Details</h2>
    <form action="productDetails.jsp" method="post">
        Product ID: <input type="text" name="productId" /><br/><br/>
        Name: <input type="text" name="name" /><br/><br/>
        Price: <input type="text" name="price" /><br/><br/>
        Quantity: <input type="text" name="quantity" /><br/><br/>
        <input type="submit" value="Submit" />
    </form>
</body>
</html>
