package org.sample.unit_testing_demo;

public class StudentService {
    private StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public String getStudentById(int id) {
        Student s = repository.findById(id);
        return s != null ? s.getName() : null;
    }
}
