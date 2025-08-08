package myassignment;

import java.util.Scanner;

public class Q9 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double total = 0;

        while (true) {
            System.out.print("Enter product number (1-3) or 0 to exit: ");
            int product = sc.nextInt();
            if (product == 0) break;

            System.out.print("Enter quantity sold: ");
            int qty = sc.nextInt();

            switch (product) {
                case 1:
                    total += qty * 22.50;
                    break;
                case 2:
                    total += qty * 44.50;
                    break;
                case 3:
                    total += qty * 9.98;
                    break;
                default:
                    System.out.println("Invalid product number.");
            }
        }

        System.out.println("Total retail value: ₹" + total);
    }
}

//Sample Input:
//Product number: 1
//Quantity: 2
//Product number: 2
//Quantity: 1
//Product number: 3
//Quantity: 3
//Product number: 0

//Calculation
//Product 1: 22.50 * 2 = 45.00
//Product 2: 44.50 * 1 = 44.50
//Product 3: 9.98 * 3 = 29.94
//Total = 45 + 44.5 + 29.94 = 119.44

