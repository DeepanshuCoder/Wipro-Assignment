package org.sample.unit_testing_demo;

import org.junit.Test;
import static org.junit.Assert.*;

public class FactorialTest {
    Factorial factorial = new Factorial();

    @Test
    public void testValid() {
        assertEquals(120, factorial.calculate(5));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testNegative() {
        factorial.calculate(-1);
    }
}
