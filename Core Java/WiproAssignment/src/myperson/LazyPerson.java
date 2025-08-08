package myperson;

public class LazyPerson extends Person {
    @Override
    public void eat() {
        System.out.println("Lazy person eats fast food while watching TV.");
    }

    @Override
    public void exercise() {
        System.out.println("Lazy person avoids exercising and prefers lying in bed.");
    }
}
