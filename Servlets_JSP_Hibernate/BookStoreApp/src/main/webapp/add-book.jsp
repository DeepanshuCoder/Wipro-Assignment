<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Add Book</title>
</head>
<body>
    <h2>Add New Book</h2>
    <form action="add" method="post">
        <label>Title:</label><input type="text" name="title" required /><br/>
        <label>Author:</label><input type="text" name="author" required /><br/>
        <label>Price:</label><input type="number" name="price" step="0.01" required /><br/>
        <input type="submit" value="Save" />
    </form>
    <br/>
    <a href="list">Back to List</a>
</body>
</html>
