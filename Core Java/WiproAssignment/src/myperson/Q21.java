package myperson;

public class Q21 {
    public static void main(String[] args) {
        // Create instances
        Person p1 = new Athlete();
        Person p2 = new LazyPerson();

        System.out.println("=== Athlete ===");
        p1.eat();
        p1.exercise();

        System.out.println("\n=== Lazy Person ===");
        p2.eat();
        p2.exercise();
    }
}
