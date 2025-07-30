package org.example;

import org.example.dao.BookAuthorDAO;
import java.util.*;

public class MainApp {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BookAuthorDAO dao = new BookAuthorDAO();

        while (true) {
            System.out.println("\n1. Add Book with Authors");
            System.out.println("2. View All Books");
            System.out.println("3. Delete Book by ID");
            System.out.println("4. Exit");
            System.out.print("Enter choice: ");
            int ch = sc.nextInt();
            sc.nextLine();  // consume newline

            switch (ch) {
                case 1:
                    System.out.print("Enter Book Title: ");
                    String title = sc.nextLine();
                    System.out.print("Enter number of authors: ");
                    int count = sc.nextInt();
                    sc.nextLine();
                    List<String> authors = new ArrayList<>();
                    for (int i = 0; i < count; i++) {
                        System.out.print("Enter author " + (i + 1) + " name: ");
                        authors.add(sc.nextLine());
                    }
                    dao.addBookWithAuthors(title, authors);
                    break;
                case 2:
                    dao.viewAllBooks();
                    break;
                case 3:
                    System.out.print("Enter Book ID to delete: ");
                    int id = sc.nextInt();
                    dao.deleteBook(id);
                    break;
                case 4:
                    System.out.println("Exiting...");
                    System.exit(0);
            }
        }
    }
}
