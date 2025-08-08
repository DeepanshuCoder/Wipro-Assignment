package myjdbc;

public class Student {
    private int id;
    private String name;
    private int age;
    private String course;
    private double marks;

    public Student(int id, String name, int age, String course, double marks) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.course = course;
        this.marks = marks;
    }

    public void display() {
        System.out.println(id + " | " + name + " | " + age + " | " + course + " | " + marks);
    }
}
