package org.sample.unit_testing_demo;

public class Account {
    private int id;
    private double balance;

    public Account(int id, double balance) {
        this.id = id;
        this.balance = balance;
    }

    public int getId() { return id; }
    public double getBalance() { return balance; }

    public void withdraw(double amount) { this.balance -= amount; }
    public void deposit(double amount) { this.balance += amount; }
}
