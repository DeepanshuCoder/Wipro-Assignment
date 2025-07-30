package org.sample.unit_testing_demo;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class AccountServiceTest {
    @Test
    public void testSuccessfulTransfer() {
        AccountRepository repo = mock(AccountRepository.class);
        NotificationService notifier = mock(NotificationService.class);

        Account acc1 = new Account(1, 5000);
        Account acc2 = new Account(2, 3000);

        when(repo.findById(1)).thenReturn(acc1);
        when(repo.findById(2)).thenReturn(acc2);

        AccountService service = new AccountService(repo, notifier);
        boolean result = service.transfer(1, 2, 1000);

        assertTrue(result);
        assertEquals(4000, acc1.getBalance(), 0);
        assertEquals(4000, acc2.getBalance(), 0);

        verify(repo, times(2)).update(any());
        verify(notifier).send(contains("Transfer complete"));
    }

    @Test
    public void testInsufficientBalance() {
        AccountRepository repo = mock(AccountRepository.class);
        NotificationService notifier = mock(NotificationService.class);

        Account acc1 = new Account(1, 100);
        Account acc2 = new Account(2, 3000);

        when(repo.findById(1)).thenReturn(acc1);
        when(repo.findById(2)).thenReturn(acc2);

        AccountService service = new AccountService(repo, notifier);
        assertFalse(service.transfer(1, 2, 500));

        verify(repo, never()).update(any());
        verify(notifier, never()).send(anyString());
    }

    @Test
    public void testAccountNotFound() {
        AccountRepository repo = mock(AccountRepository.class);
        NotificationService notifier = mock(NotificationService.class);

        when(repo.findById(1)).thenReturn(null);
        when(repo.findById(2)).thenReturn(new Account(2, 2000));

        AccountService service = new AccountService(repo, notifier);
        assertFalse(service.transfer(1, 2, 1000));
    }
}
