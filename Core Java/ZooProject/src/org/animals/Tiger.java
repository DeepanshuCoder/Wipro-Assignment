package org.animals;

public class Tiger {
    String color = "Orange with black stripes";
    int weight = 220;
    int age = 8;

    public boolean isVegetarian() {
        return false;
    }

    public boolean canClimb() {
        return true;
    }

    public String sound() {
        return "Growls";
    }

    public void display() {
        System.out.println("Tiger - Color: " + color + ", Weight: " + weight + ", Age: " + age);
        System.out.println("Is Vegetarian? " + isVegetarian());
        System.out.println("Can Climb? " + canClimb());
        System.out.println("Sound: " + sound());
    }
}
