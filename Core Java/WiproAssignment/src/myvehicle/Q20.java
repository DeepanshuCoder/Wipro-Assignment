package myvehicle;

public class Q20 {
    public static void main(String[] args) {
        Vehicle myCar = new Car();
        Vehicle myBike = new Motorcycle();

        System.out.println("=== Car Actions ===");
        myCar.startEngine();
        myCar.stopEngine();

        System.out.println("\n=== Motorcycle Actions ===");
        myBike.startEngine();
        myBike.stopEngine();
    }
}
