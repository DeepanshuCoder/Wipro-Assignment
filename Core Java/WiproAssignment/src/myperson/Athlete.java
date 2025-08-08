package myperson;

public class Athlete extends Person {
    @Override
    public void eat() {
        System.out.println("Athlete eats a high-protein, balanced diet.");
    }

    @Override
    public void exercise() {
        System.out.println("Athlete exercises intensely for 2 hours daily.");
    }
}

