package org.sample.unit_testing_demo;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class StudentServiceTest {
    @Test
    public void testGetStudentById() {
        StudentRepository mockRepo = mock(StudentRepository.class);
        when(mockRepo.findById(1)).thenReturn(new Student(1, "Alice"));

        StudentService service = new StudentService(mockRepo);
        assertEquals("Alice", service.getStudentById(1));
    }
}
