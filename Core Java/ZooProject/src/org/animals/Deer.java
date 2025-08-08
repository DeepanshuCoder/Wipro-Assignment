package org.animals;

public class Deer {
    String color = "Brown";
    int weight = 100;
    int age = 4;

    public boolean isVegetarian() {
        return true;
    }

    public boolean canClimb() {
        return false;
    }

    public String sound() {
        return "Bleats";
    }

    public void display() {
        System.out.println("Deer - Color: " + color + ", Weight: " + weight + ", Age: " + age);
        System.out.println("Is Vegetarian? " + isVegetarian());
        System.out.println("Can Climb? " + canClimb());
        System.out.println("Sound: " + sound());
    }
}
