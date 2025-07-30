package mystudent;

public class Student {
    private static int rollCounter = 1;

    private int rollNo;
    private String studName;
    private int marksInEng;
    private int marksInMaths;
    private int marksInScience;

    public Student(String studName, int marksInEng, int marksInMaths, int marksInScience) {
        this.rollNo = rollCounter++;
        this.studName = studName;
        this.marksInEng = marksInEng;
        this.marksInMaths = marksInMaths;
        this.marksInScience = marksInScience;
    }

    // Getters
    public int getRollNo() { return rollNo; }
    public String getStudName() { return studName; }
    public int getMarksInEng() { return marksInEng; }
    public int getMarksInMaths() { return marksInMaths; }
    public int getMarksInScience() { return marksInScience; }

    public int getTotalMarks() {
        return marksInEng + marksInMaths + marksInScience;
    }

    public double getPercentage() {
        return getTotalMarks() / 3.0;
    }
}

