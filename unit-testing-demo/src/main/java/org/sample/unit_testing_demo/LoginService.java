package org.sample.unit_testing_demo;

public class LoginService {
    public boolean validate(String username, String password) {
        if (username == null || password == null || username.isEmpty() || password.isEmpty()) return false;
        return username.equals("admin") && password.equals("admin123");
    }
}
