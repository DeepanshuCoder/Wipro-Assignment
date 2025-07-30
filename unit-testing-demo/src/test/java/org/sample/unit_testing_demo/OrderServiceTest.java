package org.sample.unit_testing_demo;

import org.junit.Test;
import static org.mockito.Mockito.*;

public class OrderServiceTest {
    @Test
    public void testPlaceOrderCallsPayment() {
        PaymentService mockPayment = mock(PaymentService.class);
        OrderService orderService = new OrderService(mockPayment);

        orderService.placeOrder();

        verify(mockPayment, times(1)).processPayment();
    }
}
