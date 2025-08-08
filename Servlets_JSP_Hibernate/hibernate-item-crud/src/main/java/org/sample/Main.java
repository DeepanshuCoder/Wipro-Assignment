package org.sample;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.sample.model.Item;
import org.sample.util.HibernateUtil;

import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice;

        do {
            System.out.println("-------------------------------");
            System.out.println("Hibernate Item CRUD");
            System.out.println("-------------------------------");
            System.out.println("1. Add");
            System.out.println("2. View All");
            System.out.println("3. Update");
            System.out.println("4. Delete");
            System.out.println("5. Get by ID");
            System.out.println("0. Exit");
            System.out.print("Choose option: ");

            choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {
                case 1:
                    addItem(sc);
                    break;
                case 2:
                    viewAllItems();
                    break;
                case 3:
                    updateItem(sc);
                    break;
                case 4:
                    deleteItem(sc);
                    break;
                case 5:
                    getItemById(sc);
                    break;
                case 0:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 0);

        sc.close();
        HibernateUtil.getSessionFactory().close();
    }

    static void addItem(Scanner sc) {
        System.out.print("Enter name: ");
        String name = sc.nextLine();
        System.out.print("Enter price: ");
        double price = sc.nextDouble();

        Item item = new Item();
        item.setName(name);
        item.setPrice(price);

        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.save(item);
        tx.commit();
        session.close();

        System.out.println("Item added.");
    }

    static void viewAllItems() {
        Session session = HibernateUtil.getSessionFactory().openSession();
        List<Item> items = session.createQuery("from Item", Item.class).list();
        for (Item i : items) {
            System.out.println(i);
        }
        session.close();
    }

    static void updateItem(Scanner sc) {
        System.out.print("Enter ID to update: ");
        int id = sc.nextInt();
        sc.nextLine();

        Session session = HibernateUtil.getSessionFactory().openSession();
        Item item = session.get(Item.class, id);

        if (item != null) {
            System.out.print("New name: ");
            String name = sc.nextLine();
            System.out.print("New price: ");
            double price = sc.nextDouble();

            Transaction tx = session.beginTransaction();
            item.setName(name);
            item.setPrice(price);
            session.update(item);
            tx.commit();
            System.out.println("Item updated.");
        } else {
            System.out.println("Item not found.");
        }

        session.close();
    }

    static void deleteItem(Scanner sc) {
        System.out.print("Enter ID to delete: ");
        int id = sc.nextInt();

        Session session = HibernateUtil.getSessionFactory().openSession();
        Item item = session.get(Item.class, id);

        if (item != null) {
            Transaction tx = session.beginTransaction();
            session.delete(item);
            tx.commit();
            System.out.println("Item deleted.");
        } else {
            System.out.println("Item not found.");
        }

        session.close();
    }

    static void getItemById(Scanner sc) {
        System.out.print("Enter ID: ");
        int id = sc.nextInt();

        Session session = HibernateUtil.getSessionFactory().openSession();
        Item item = session.get(Item.class, id);

        if (item != null) {
            System.out.println(item);
        } else {
            System.out.println("Item not found.");
        }

        session.close();
    }
}
