package org.sample.unit_testing_demo;

public interface AccountRepository {
    Account findById(int id);
    void update(Account account);
}
