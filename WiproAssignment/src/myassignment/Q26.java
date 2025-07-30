package myassignment;

import java.util.*;

public class Q26 {
    public static void main(String[] args) {
        int[] input = {2, 3, 54, 1, 6, 7, 7};

        // Step 1: Use LinkedHashSet to maintain insertion order and remove duplicates
        Set<Integer> uniqueSet = new LinkedHashSet<>();
        for (int num : input) {
            uniqueSet.add(num);
        }

        // Step 2: Sum even numbers
        int evenSum = 0;
        for (int num : uniqueSet) {
            if (num % 2 == 0) {
                evenSum += num;
            }
        }

        // Print the result
        System.out.println("Sum of even numbers: " + evenSum);
    }
}

