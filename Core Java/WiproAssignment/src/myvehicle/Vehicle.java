package myvehicle;

public abstract class Vehicle {
    // ✅ Default constructor to avoid NoSuchMethodError
    public Vehicle() {}

    // Abstract methods to be overridden by subclasses
    public abstract void startEngine();
    public abstract void stopEngine();
}
