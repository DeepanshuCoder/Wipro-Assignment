package myassignment;

import java.util.Scanner;

public class Q25 {

    // ✅ Calculate area using Heron's formula
    public static double area(double a, double b, double c) {
        double s = (a + b + c) / 2.0;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    // ✅ Calculate perimeter
    public static double perimeter(double a, double b, double c) {
        return a + b + c;
    }

    // ✅ Check if triangle is valid
    public static boolean isValid(double a, double b, double c) {
        return (a + b > c) && (a + c > b) && (b + c > a);
    }

    // ✅ Main method
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            // 1. Input side a
            System.out.print("Enter side a: ");
            double a = scanner.nextDouble();

            // 2. Exit if a == -1
            if (a == -1) {
                System.out.println("Bye~");
                break;
            }

            // 3. Input sides b and c
            System.out.print("Enter side b: ");
            double b = scanner.nextDouble();

            System.out.print("Enter side c: ");
            double c = scanner.nextDouble();

            // 4. Check validity
            if (isValid(a, b, c)) {
                System.out.println("Valid Triangle!");
                System.out.printf("Perimeter: %.2f\n", perimeter(a, b, c));
                System.out.printf("Area: %.2f\n", area(a, b, c));
            } else {
                System.out.println("The input is invalid.");
            }

            System.out.println(); // new line for clarity
        }

        scanner.close();
    }
}

