package myassignment;

public class Q3 {
    public static void main(String[] args) {
        int totalStudents = 90;
        int boys = 45;
        int gradeA = totalStudents / 2;
        int boysGradeA = 20;
        int girlsGradeA = gradeA - boysGradeA;
        System.out.println("Total number of girls getting grade A: " + girlsGradeA);
    }
}

//Total students = 90
//Grade A = 50% of 90 = 45
//Boys with A grade = 20
//Girls = 45 - 20 = 25
