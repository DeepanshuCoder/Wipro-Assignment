package org.animals;

public class Lion {
    String color = "Golden";
    int weight = 200;
    int age = 10;

    public boolean isVegetarian() {
        return false;
    }

    public boolean canClimb() {
        return false;
    }

    public String sound() {
        return "Roars";
    }

    public void display() {
        System.out.println("Lion - Color: " + color + ", Weight: " + weight + ", Age: " + age);
        System.out.println("Is Vegetarian? " + isVegetarian());
        System.out.println("Can Climb? " + canClimb());
        System.out.println("Sound: " + sound());
    }
}

