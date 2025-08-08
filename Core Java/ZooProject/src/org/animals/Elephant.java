package org.animals;

public class Elephant {
    String color = "Grey";
    int weight = 5000;
    int age = 25;

    public boolean isVegetarian() {
        return true;
    }

    public boolean canClimb() {
        return false;
    }

    public String sound() {
        return "Trumpets";
    }

    public void display() {
        System.out.println("Elephant - Color: " + color + ", Weight: " + weight + ", Age: " + age);
        System.out.println("Is Vegetarian? " + isVegetarian());
        System.out.println("Can Climb? " + canClimb());
        System.out.println("Sound: " + sound());
    }
}
