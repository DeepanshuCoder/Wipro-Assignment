package myassignment;

import java.util.Scanner;

public class Q5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your salary: ");
        double salary = sc.nextDouble();

        System.out.print("Enter your years of service: ");
        int years = sc.nextInt();

        if (years > 6) {
            double bonus = salary * 0.10;
            System.out.println("Your bonus is: " + bonus);
        } else {
            System.out.println("You are not eligible for bonus.");
        }
    }
}

//Enter your salary: 50000
//Enter your years of service: 7

