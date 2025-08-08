<!DOCTYPE html>
<html>
<head>
    <title>Register User</title>
</head>
<body>
    <h1>User Registration</h1>
    <form action="register" method="post">
        Full Name: <input type="text" name="fullname"><br><br>
        Email: <input type="email" name="email"><br><br>
        Password: <input type="password" name="password"><br><br>
        Birthday: <input type="date" name="birthday"><br><br>
        Gender:
        <input type="radio" name="gender" value="Male"> Male
        <input type="radio" name="gender" value="Female"> Female<br><br>
        Profession: <input type="text" name="profession"><br><br>
        Married? <input type="checkbox" name="married"><br><br>
        <input type="submit" value="Register">
    </form>
</body>
</html>
