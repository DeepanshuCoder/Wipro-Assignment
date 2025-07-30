package org.sample.unit_testing_demo;

public class AccountService {
    private AccountRepository repo;
    private NotificationService notifier;

    public AccountService(AccountRepository repo, NotificationService notifier) {
        this.repo = repo;
        this.notifier = notifier;
    }

    public boolean transfer(int fromId, int toId, double amount) {
        Account from = repo.findById(fromId);
        Account to = repo.findById(toId);

        if (from == null || to == null) return false;
        if (from.getBalance() < amount) return false;

        from.withdraw(amount);
        to.deposit(amount);
        repo.update(from);
        repo.update(to);

        notifier.send("Transfer complete from " + fromId + " to " + toId);
        return true;
    }
}
