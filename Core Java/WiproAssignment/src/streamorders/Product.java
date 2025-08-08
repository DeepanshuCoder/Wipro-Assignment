package streamorders;

public class Product {
    public Long id;
    private String name;
    private String category;
    private Double price;

    public Product(Long id, String name, String category, Double price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }

    public String getCategory() { return category; }
    public Double getPrice() { return price; }
    public String getName() { return name; }

    @Override
    public String toString() {
        return name + " (" + category + ", ₹" + price + ")";
    }
}
