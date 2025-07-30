package myassignment;

class Vehicle {
    String color;
    int wheels;
    String model;

    Vehicle(String color, int wheels, String model) {
        this.color = color;
        this.wheels = wheels;
        this.model = model;
    }

    void display() {
        System.out.println("Color: " + color + ", Wheels: " + wheels + ", Model: " + model);
    }
}

class Truck extends Vehicle {
    Truck() { super("Red", 6, "Volvo Truck"); }
}

class Car extends Vehicle {
    Car() { super("Blue", 4, "Sedan"); }
}

class Bus extends Vehicle {
    Bus() { super("Yellow", 6, "School Bus"); }
}

class Q17 {
    public static void main(String[] args) {
        Truck truck = new Truck();
        Car car = new Car();
        Bus bus = new Bus();

        truck.display();
        car.display();
        bus.display();
    }
}
