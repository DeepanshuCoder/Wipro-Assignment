package org.sample.item_crud.model;

import jakarta.persistence.*;

@Entity
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private double price;

    public Item() {}
    public Item(String name, double price) {
        this.name = name;
        this.price = price;
    }

    // getters and setters

    public int getId() { return id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public String toString() {
        return "Item [id=" + id + ", name=" + name + ", price=" + price + "]";
    }
}
