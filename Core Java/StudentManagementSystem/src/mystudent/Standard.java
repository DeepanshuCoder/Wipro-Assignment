package mystudent;

import java.util.*;

public class Standard {
    private List<Student> students = new ArrayList<>();

    public Standard() {
        // Add 8 students
        students.add(new Student("Alice", 85, 92, 78));
        students.add(new Student("Bob", 70, 88, 90));
        students.add(new Student("Charlie", 95, 89, 93));
        students.add(new Student("David", 60, 55, 72));
        students.add(new Student("Eve", 77, 65, 81));
        students.add(new Student("Frank", 80, 91, 84));
        students.add(new Student("Grace", 88, 72, 79));
        students.add(new Student("Helen", 92, 98, 95));
    }

    public void displayByRollNo() {
        System.out.println("\nStudents by Roll No:");
        students.stream()
                .sorted(Comparator.comparingInt(Student::getRollNo))
                .forEach(s -> System.out.println(s.getRollNo() + " - " + s.getStudName()));
    }

    public void displayTopperByPercentage() {
        Student top = Collections.max(students, Comparator.comparingDouble(Student::getPercentage));
        System.out.println("\nTopper by Percentage:");
        System.out.println(top.getRollNo() + " - " + top.getStudName() + " (" + String.format("%.2f", top.getPercentage()) + "%)");
    }

    public void displayTopperInMaths() {
        Student top = Collections.max(students, Comparator.comparingInt(Student::getMarksInMaths));
        System.out.println("\nTopper in Mathematics:");
        System.out.println(top.getRollNo() + " - " + top.getStudName() + " (" + top.getMarksInMaths() + ")");
    }

    public void displaySortedByMathsAndScience() {
        System.out.println("\nSorted by Maths + Science:");
        students.stream()
                .sorted((s1, s2) -> {
                    int total1 = s1.getMarksInMaths() + s1.getMarksInScience();
                    int total2 = s2.getMarksInMaths() + s2.getMarksInScience();
                    return Integer.compare(total1, total2);
                })
                .forEach(s -> {
                    int total = s.getMarksInMaths() + s.getMarksInScience();
                    System.out.println(s.getRollNo() + " - " + s.getStudName() + " (Total: " + total + ")");
                });
    }

    public void displayRankList() {
        System.out.println("\nRank List:");
        List<Student> sorted = new ArrayList<>(students);
        sorted.sort((s1, s2) -> Double.compare(s2.getPercentage(), s1.getPercentage()));

        int rank = 1;
        for (Student s : sorted) {
            System.out.printf("Rank %d: RollNo %d, Name: %s, Total: %d, Percentage: %.2f%%\n",
                    rank++, s.getRollNo(), s.getStudName(), s.getTotalMarks(), s.getPercentage());
        }
    }
}

