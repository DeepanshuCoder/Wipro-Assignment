<%@ page contentType="text/html; charset=UTF-8" %>
<html>
<head><title>Enter Account Details</title></head>
<body>
    <h2>Bank Account Entry Form</h2>
    <form action="accountDetails.jsp" method="post">
        Account No: <input type="text" name="accountNo"><br><br>
        Name: <input type="text" name="name"><br><br>
        Balance: <input type="text" name="balance"><br><br>
        Account Type:
        <select name="accountType">
            <option>Savings</option>
            <option>Current</option>
        </select><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
