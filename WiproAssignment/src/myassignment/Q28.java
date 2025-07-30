package myassignment;

public class Q28 {

    // Lambda to check if number is odd
    public static PerformOperation isOdd() {
        return n -> n % 2 != 0;
    }

    // Lambda to check if number is prime
    public static PerformOperation isPrime() {
        return n -> {
            if (n < 2) return false;
            for (int i = 2; i <= Math.sqrt(n); i++) {
                if (n % i == 0) return false;
            }
            return true;
        };
    }

    // Lambda to check if number is palindrome
    public static PerformOperation isPalindrome() {
        return n -> {
            int original = n, reverse = 0;
            while (n > 0) {
                int digit = n % 10;
                reverse = reverse * 10 + digit;
                n /= 10;
            }
            return original == reverse;
        };
    }

    // Main method to test the lambdas
    public static void main(String[] args) {
        PerformOperation oddOp = isOdd();
        PerformOperation primeOp = isPrime();
        PerformOperation palindromeOp = isPalindrome();

        int testNumber = 121;

        System.out.println("Is " + testNumber + " odd? " + oddOp.check(testNumber));
        System.out.println("Is " + testNumber + " prime? " + primeOp.check(testNumber));
        System.out.println("Is " + testNumber + " palindrome? " + palindromeOp.check(testNumber));
    }
}
