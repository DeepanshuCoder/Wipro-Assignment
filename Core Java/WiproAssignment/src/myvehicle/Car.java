package myvehicle;

public class Car extends Vehicle {
    @Override
    public void startEngine() {
        System.out.println("Car engine started with key ignition.");
    }

    @Override
    public void stopEngine() {
        System.out.println("Car engine stopped.");
    }
}

