package myassignment;

// Superclass
class Worker {
    String name;
    double salaryRate;

    public Worker(String name, double salaryRate) {
        this.name = name;
        this.salaryRate = salaryRate;
    }

    // Method to be overridden
    public double pay(int hours) {
        return 0; // default implementation
    }
}

// DailyWorker class
class DailyWorker extends Worker {
    public DailyWorker(String name, double salaryRate) {
        super(name, salaryRate);
    }

    @Override
    public double pay(int days) {
        return salaryRate * days;
    }
}

// SalariedWorker class
class SalariedWorker extends Worker {
    public SalariedWorker(String name, double salaryRate) {
        super(name, salaryRate);
    }

    @Override
    public double pay(int hours) {
        return salaryRate * 40; // Always paid for 40 hours
    }
}

// Main class with test
public class TestQ13 {
    public static void main(String[] args) {
        DailyWorker daily = new DailyWorker("Amit", 500);           // ₹500/day
        SalariedWorker salaried = new SalariedWorker("Reena", 400); // ₹400/hour

        System.out.println("Daily Worker Pay for 6 days: ₹" + daily.pay(6));
        System.out.println("Salaried Worker Weekly Pay: ₹" + salaried.pay(50));
    }
}

