package streamorders;

import java.time.LocalDate;
import java.util.List;

public class Order {
    private Long id;
    private String status;
    private LocalDate orderDate;
    private LocalDate deliveryDate;
    private List<Product> products;
    private Customer customer;

    public Order(Long id, String status, LocalDate orderDate, LocalDate deliveryDate, List<Product> products, Customer customer) {
        this.id = id;
        this.status = status;
        this.orderDate = orderDate;
        this.deliveryDate = deliveryDate;
        this.products = products;
        this.customer = customer;
    }

    public List<Product> getProducts() { return products; }
    public Customer getCustomer() { return customer; }
    public LocalDate getOrderDate() { return orderDate; }

    @Override
    public String toString() {
        return "Order ID: " + id + ", Customer: " + customer.getName() + ", Date: " + orderDate;
    }
}
