package myassignment;

class Q14 {
    double area(double side) {
        return side * side;
    }

    double area(double length, double breadth) {
        return length * breadth;
    }

    double perimeter(double side) {
        return 4 * side;
    }

    double perimeter(double length, double breadth) {
        return 2 * (length + breadth);
    }

    public static void main(String[] args) {
        Q14 shape = new Q14();
        System.out.println("Square Area: " + shape.area(5));
        System.out.println("Rectangle Area: " + shape.area(5, 10));
        System.out.println("Square Perimeter: " + shape.perimeter(5));
        System.out.println("Rectangle Perimeter: " + shape.perimeter(5, 10));
    }
}
