<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Book List</title>
</head>
<body>
    <h2>List of Books</h2>
    <a href="add-book.jsp">Add New Book</a>
    <br/><br/>
    <table border="1" cellpadding="10">
        <tr>
            <th>ID</th><th>Title</th><th>Author</th><th>Price</th><th>Actions</th>
        </tr>
        <c:forEach var="book" items="${bookList}">
            <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.price}</td>
                <td>
                    <a href="edit?id=${book.id}">Edit</a> |
                    <a href="delete?id=${book.id}" onclick="return confirm('Are you sure?')">Delete</a>
                </td>
            </tr>
        </c:forEach>
    </table>
</body>
</html>
