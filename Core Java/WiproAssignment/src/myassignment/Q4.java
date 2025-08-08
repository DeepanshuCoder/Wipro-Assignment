package myassignment;

import java.util.Scanner;

public class Q4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        System.out.print("Enter your roll number: ");
        String roll = sc.nextLine();

        System.out.print("Enter your field of interest: ");
        String interest = sc.nextLine();

        System.out.println("Hey, my name is " + name + " and my roll number is " + roll + ". My field of interest are " + interest + ".");
    }
}

//Enter your name: Deepanshu
//Enter your roll number: 101
//Enter your field of interest: AI and Java
