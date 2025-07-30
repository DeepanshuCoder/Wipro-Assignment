package org.sample.unit_testing_demo;

public class StringUtil {
    public String reverse(String str) {
        if (str == null) return null;
        return new StringBuilder(str).reverse().toString();
    }
}
