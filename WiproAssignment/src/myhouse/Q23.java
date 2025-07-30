package myhouse;

public class Q23 {
    public static void main(String[] args) {
        Hall hall = new Hall();
        Kitchen kitchen = new Kitchen();

        System.out.println("=== Hall ===");
        hall.showMessage();

        System.out.println("\n=== Kitchen ===");
        kitchen.showAppliances();
    }
}

