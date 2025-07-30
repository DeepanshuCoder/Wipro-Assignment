package myassignment;

//Q19.java

import java.util.*;

abstract class Bank {
 String accNo;       // customer account number
 String custName;    // customer name
 int custGender;     // 1 = Male, 2 = Female
 String custJob;     // job title
 double curBal;      // current balance

 public Bank(String accNo, String custName, int custGender, String custJob, double curBal) {
     this.accNo = accNo;
     this.custName = custName;
     this.custGender = custGender;
     this.custJob = custJob;
     this.curBal = curBal;
 }

 public String toString() {
     String genderStr = (custGender == 1) ? "Male" : "Female";
     return "Account No: " + accNo + ", Name: " + custName + ", Gender: " + genderStr +
            ", Job: " + custJob + ", Current Balance: RM " + curBal;
 }

 // Abstract method to be implemented by subclasses
 public abstract double calcBalance();
}

//Subclass: Saving
class Saving extends Bank {
 double savRate;

 public Saving(String accNo, String custName, int custGender, String custJob, double curBal, double savRate) {
     super(accNo, custName, custGender, custJob, curBal);
     this.savRate = savRate;
 }

 @Override
 public double calcBalance() {
     return curBal + (savRate * curBal);
 }
}

//Subclass: Current
class Current extends Bank {
 boolean fixedDep;
 double curRate;

 public Current(String accNo, String custName, int custGender, String custJob, double curBal, boolean fixedDep, double curRate) {
     super(accNo, custName, custGender, custJob, curBal);
     this.fixedDep = fixedDep;
     this.curRate = curRate;
 }

 @Override
 public double calcBalance() {
     double total = curBal + (curRate * curBal);
     if (fixedDep) {
         total -= 150; // Deduct service fee for fixed deposit holders
     }
     return total;
 }
}

//Main class
public class Q19 {
 public static void main(String[] args) {
     Scanner sc = new Scanner(System.in);

     // Sample customer list
     List<Bank> customerList = new ArrayList<>();
     customerList.add(new Saving("S101", "Alice", 2, "Teacher", 10000, 0.05));
     customerList.add(new Current("C201", "Bob", 1, "Engineer", 15000, true, 0.03));
     customerList.add(new Current("C202", "John", 1, "Doctor", 8000, false, 0.02));
     customerList.add(new Saving("S102", "Priya", 2, "Student", 5000, 0.06));

     // a) Print balance for all customers
     System.out.println("=== All Customer Details and Final Balances ===");
     for (Bank b : customerList) {
         System.out.println(b.toString());
         System.out.println("Final Balance: RM " + b.calcBalance());
         System.out.println("------------------------------------------");
     }

     // b) Search for a customer by account number
     System.out.print("\nEnter account number to search: ");
     String inputAccNo = sc.nextLine();
     boolean found = false;
     for (Bank b : customerList) {
         if (b.accNo.equalsIgnoreCase(inputAccNo)) {
             System.out.println("\nCustomer Found:");
             System.out.println(b.toString());
             System.out.println("Final Balance: RM " + b.calcBalance());
             found = true;
             break;
         }
     }
     if (!found) {
         System.out.println("Customer with account number " + inputAccNo + " not found.");
     }

     // c) Count how many current account customers and their total balance
     int currentCount = 0;
     double currentTotal = 0;
     for (Bank b : customerList) {
         if (b instanceof Current) {
             currentCount++;
             currentTotal += b.calcBalance();
         }
     }

     System.out.println("\nTotal Current Account Customers: " + currentCount);
     System.out.println("Total Balance of Current Accounts: RM " + currentTotal);
 }
}


