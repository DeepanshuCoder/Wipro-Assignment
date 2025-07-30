package org.sample.unit_testing_demo;

import org.junit.Test;
import static org.junit.Assert.*;

public class LoginServiceTest {
    LoginService service = new LoginService();

    @Test
    public void testValid() {
        assertTrue(service.validate("admin", "admin123"));
    }

    @Test
    public void testEmpty() {
        assertFalse(service.validate("", ""));
    }

    @Test
    public void testNull() {
        assertFalse(service.validate(null, null));
    }

    @Test
    public void testInvalid() {
        assertFalse(service.validate("user", "pass"));
    }
}
