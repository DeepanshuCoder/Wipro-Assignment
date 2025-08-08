package org.animals;

public class Giraffe {
    String color = "Yellow with brown patches";
    int weight = 800;
    int age = 12;

    public boolean isVegetarian() {
        return true;
    }

    public boolean canClimb() {
        return false;
    }

    public String sound() {
        return "Hum";
    }

    public void display() {
        System.out.println("Giraffe - Color: " + color + ", Weight: " + weight + ", Age: " + age);
        System.out.println("Is Vegetarian? " + isVegetarian());
        System.out.println("Can Climb? " + canClimb());
        System.out.println("Sound: " + sound());
    }
}
