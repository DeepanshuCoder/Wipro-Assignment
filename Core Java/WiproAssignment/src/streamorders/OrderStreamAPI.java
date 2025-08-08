package streamorders;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;

public class OrderStreamAPI {
    public static void main(String[] args) {
        // Products
        Product p1 = new Product(1L, "Java Book", "Books", 200.0);
        Product p2 = new Product(2L, "Baby Oil", "Baby", 150.0);
        Product p3 = new Product(3L, "Toy Car", "Toys", 300.0);
        Product p4 = new Product(4L, "C++ Book", "Books", 90.0);
        Product p5 = new Product(5L, "Soft Toy", "Toys", 180.0);

        // Customers
        Customer c1 = new Customer(1L, "Ravi", 2);
        Customer c2 = new Customer(2L, "Priya", 1);

        // Orders
        Order o1 = new Order(101L, "DELIVERED", LocalDate.of(2021, 2, 5), LocalDate.of(2021, 2, 10), List.of(p1, p2), c1);
        Order o2 = new Order(102L, "DELIVERED", LocalDate.of(2021, 3, 10), LocalDate.of(2021, 3, 15), List.of(p4), c1);
        Order o3 = new Order(103L, "PENDING", LocalDate.of(2021, 1, 25), LocalDate.of(2021, 1, 30), List.of(p3, p5), c2);

        List<Order> orders = List.of(o1, o2, o3);

        // 1. Books with price > 100
        System.out.println("Books > ₹100:");
        orders.stream()
            .flatMap(o -> o.getProducts().stream())
            .filter(p -> p.getCategory().equals("Books") && p.getPrice() > 100)
            .distinct().forEach(System.out::println);

        // 2. Orders with Baby products
        System.out.println("\nOrders with Baby category:");
        orders.stream()
            .filter(o -> o.getProducts().stream().anyMatch(p -> p.getCategory().equals("Baby")))
            .forEach(System.out::println);

        // 3. Toys with 10% discount
        System.out.println("\nToys with 10% discount:");
        orders.stream()
            .flatMap(o -> o.getProducts().stream())
            .filter(p -> p.getCategory().equals("Toys"))
            .map(p -> new Product(p.id, p.getName(), p.getCategory(), p.getPrice() * 0.9))
            .forEach(System.out::println);

        // 4. Products by Tier 2 customers between Feb-Apr
        System.out.println("\nProducts by Tier 2 customers between Feb-Apr:");
        orders.stream()
            .filter(o -> o.getCustomer().getTier() == 2)
            .filter(o -> o.getOrderDate().isAfter(LocalDate.of(2021, 2, 1)) &&
                         o.getOrderDate().isBefore(LocalDate.of(2021, 4, 1)))
            .flatMap(o -> o.getProducts().stream())
            .distinct()
            .forEach(System.out::println);

        // 5. Cheapest Book
        System.out.println("\nCheapest Book:");
        orders.stream()
            .flatMap(o -> o.getProducts().stream())
            .filter(p -> p.getCategory().equals("Books"))
            .sorted(Comparator.comparingDouble(Product::getPrice))
            .findFirst().ifPresent(System.out::println);

        // 6. 3 most recent orders
        System.out.println("\nTop 3 recent orders:");
        orders.stream()
            .sorted(Comparator.comparing(Order::getOrderDate).reversed())
            .limit(3)
            .forEach(System.out::println);

        // 7. Total order value in Feb 2021
        double totalFeb = orders.stream()
            .filter(o -> o.getOrderDate().getMonthValue() == 2 && o.getOrderDate().getYear() == 2021)
            .flatMap(o -> o.getProducts().stream())
            .mapToDouble(Product::getPrice).sum();
        System.out.println("\nTotal in Feb 2021: ₹" + totalFeb);

        // 8. Books Summary
        System.out.println("\nBooks Summary:");
        DoubleSummaryStatistics stats = orders.stream()
            .flatMap(o -> o.getProducts().stream())
            .filter(p -> p.getCategory().equals("Books"))
            .mapToDouble(Product::getPrice)
            .summaryStatistics();
        System.out.println(stats);

        // 9. Most expensive product per category
        System.out.println("\nMax price product by category:");
        orders.stream()
            .flatMap(o -> o.getProducts().stream())
            .collect(Collectors.groupingBy(Product::getCategory,
                Collectors.collectingAndThen(
                    Collectors.maxBy(Comparator.comparing(Product::getPrice)),
                    Optional::get)))
            .forEach((cat, prod) -> System.out.println(cat + " → " + prod));
    }
}
