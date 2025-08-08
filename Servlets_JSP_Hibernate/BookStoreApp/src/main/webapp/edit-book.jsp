<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="com.bookstore.model.Book" %>
<%
    Book book = (Book) request.getAttribute("book");
%>
<html>
<head>
    <title>Edit Book</title>
</head>
<body>
    <h2>Edit Book</h2>
    <form action="edit" method="post">
        <input type="hidden" name="id" value="<%= book.getId() %>" />
        <label>Title:</label><input type="text" name="title" value="<%= book.getTitle() %>" required /><br/>
        <label>Author:</label><input type="text" name="author" value="<%= book.getAuthor() %>" required /><br/>
        <label>Price:</label><input type="number" name="price" step="0.01" value="<%= book.getPrice() %>" required /><br/>
        <input type="submit" value="Update" />
    </form>
    <br/>
    <a href="list">Back to List</a>
</body>
</html>
