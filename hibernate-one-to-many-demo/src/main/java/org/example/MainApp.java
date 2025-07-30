package org.example;

import org.example.dao.AccountTransactionDAO;
import java.util.Scanner;

public class MainApp {
    public static void main(String[] args) {
        AccountTransactionDAO dao = new AccountTransactionDAO();
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("\n1. Create\n2. Read\n3. Update\n4. Delete\n5. Exit");
            System.out.print("Enter choice: ");
            int choice = sc.nextInt();

            switch (choice) {
                case 1: dao.createAccountWithTransactions(); break;
                case 2:
                    System.out.print("Enter Account ID: ");
                    dao.readAccount(sc.nextInt()); break;
                case 3:
                    System.out.print("Enter Account ID: ");
                    dao.updateAccountName(sc.nextInt()); break;
                case 4:
                    System.out.print("Enter Account ID: ");
                    dao.deleteAccount(sc.nextInt()); break;
                case 5: System.exit(0);
            }
        }
    }
}
