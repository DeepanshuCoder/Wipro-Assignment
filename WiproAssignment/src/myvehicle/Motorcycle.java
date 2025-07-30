package myvehicle;

public class Motorcycle extends Vehicle {
    @Override
    public void startEngine() {
        System.out.println("Motorcycle engine started with self start.");
    }

    @Override
    public void stopEngine() {
        System.out.println("Motorcycle engine stopped.");
    }
}

