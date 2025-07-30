package myassignment;

import java.util.Scanner;

public class Q24 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] speeds = new int[5];
        int sum = 0;

        // Step 1: Input speeds of 5 bikers
        for (int i = 0; i < 5; i++) {
            System.out.print("Enter speed of biker " + (i + 1) + ": ");
            speeds[i] = scanner.nextInt();
            sum += speeds[i];
        }

        // Step 2: Calculate average speed
        double average = sum / 5.0;
        System.out.printf("\nAverage Speed = %.2f\n", average);

        // Step 3: Print qualifying bikers
        System.out.println("Qualifying Biker Speeds (greater than average):");
        boolean anyQualified = false;

        for (int speed : speeds) {
            if (speed > average) {
                System.out.println("- " + speed + " km/h");
                anyQualified = true;
            }
        }

        if (!anyQualified) {
            System.out.println("No biker qualified.");
        }

        scanner.close();
    }
}
