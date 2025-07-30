package org.sample.unit_testing_demo;

import org.junit.Test;

public class MathUtilTest {
    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        new MathUtil().divide(5, 0);
    }
}
