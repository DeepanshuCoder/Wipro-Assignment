package org.sample.unit_testing_demo;

public class Factorial {
    public int calculate(int n) {
        if (n < 0) throw new IllegalArgumentException("Negative not allowed");
        int result = 1;
        for (int i = 2; i <= n; i++) result *= i;
        return result;
    }
}

