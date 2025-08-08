package myassignment;

public class Q11 {
    public void add(int a, int b) {
        System.out.println("Addition: " + (a + b));
    }

    public void diff(int a, int b) {
        System.out.println("Difference: " + (a - b));
    }

    public void mul(int a, int b) {
        System.out.println("Multiplication: " + (a * b));
    }

    public void div(int a, int b) {
        if (b != 0)
            System.out.println("Division: " + (a / b));
        else
            System.out.println("Cannot divide by zero.");
    }

    public static void main(String[] args) {
        Q11 calc = new Q11();
        calc.add(10, 5);   // 15
        calc.diff(10, 5);  // 5
        calc.mul(10, 5);   // 50
        calc.div(10, 5);   // 2
    }
}

