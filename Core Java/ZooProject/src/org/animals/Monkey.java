package org.animals;

public class Monkey {
    String color = "Grey";
    int weight = 40;
    int age = 5;

    public boolean isVegetarian() {
        return true;
    }

    public boolean canClimb() {
        return true;
    }

    public String sound() {
        return "Chatter";
    }

    public void display() {
        System.out.println("Monkey - Color: " + color + ", Weight: " + weight + ", Age: " + age);
        System.out.println("Is Vegetarian? " + isVegetarian());
        System.out.println("Can Climb? " + canClimb());
        System.out.println("Sound: " + sound());
    }
}
