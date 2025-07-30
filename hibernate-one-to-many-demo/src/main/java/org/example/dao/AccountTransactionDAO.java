package org.example.dao;

import org.example.entity.Account;
import org.example.entity.Transaction;
import org.example.util.HibernateUtil;
import org.hibernate.Session;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class AccountTransactionDAO {

    Scanner sc = new Scanner(System.in);

    public void createAccountWithTransactions() {
        Session session = HibernateUtil.getSessionFactory().openSession();
        org.hibernate.Transaction tx = session.beginTransaction(); // ✅ Fully qualified name

        Account account = new Account();
        System.out.print("Enter Account Name: ");
        sc.nextLine(); // to consume leftover newline
        account.setName(sc.nextLine());

        Transaction t1 = new Transaction();
        System.out.print("Enter Transaction Description: ");
        t1.setDescription(sc.nextLine());
        System.out.print("Enter Amount: ");
        t1.setAmount(sc.nextDouble());
        t1.setAccount(account);

        List<Transaction> txList = new ArrayList<>();
        txList.add(t1);
        account.setTransactions(txList);

        session.save(account);
        tx.commit();
        session.close();
    }

    public void readAccount(int id) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Account acc = session.get(Account.class, id);
        System.out.println(acc);
        session.close();
    }

    public void updateAccountName(int id) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        org.hibernate.Transaction tx = session.beginTransaction(); // ✅ Fully qualified
        Account acc = session.get(Account.class, id);
        System.out.print("Enter new name: ");
        acc.setName(sc.next());
        tx.commit();
        session.close();
    }

    public void deleteAccount(int id) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        org.hibernate.Transaction tx = session.beginTransaction(); // ✅ Fully qualified
        Account acc = session.get(Account.class, id);
        session.delete(acc);
        tx.commit();
        session.close();
    }
}
