package streamtasks;

import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;

public class Q50 {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee(101, "Ravi", "HR", 50000),
            new Employee(102, "Priya", "IT", 60000),
            new Employee(103, "Arun", "HR", 55000),
            new Employee(104, "Kavya", "IT", 70000),
            new Employee(105, "Divya", "Sales", 45000)
        );

        // Q1. Print all employee names
        System.out.println("Q1: Names:");
        employees.stream().map(Employee::getName).forEach(System.out::println);

        // Q2. Salary > 55000
        System.out.println("\nQ2: Salary > 55000:");
        employees.stream().filter(e -> e.getSalary() > 55000).forEach(System.out::println);

        // Q3. Count HR
        long hrCount = employees.stream().filter(e -> e.getDepartment().equals("HR")).count();
        System.out.println("\nQ3: HR Count = " + hrCount);

        // Q4. Sort by salary descending
        System.out.println("\nQ4: Salary Desc:");
        employees.stream().sorted(Comparator.comparingDouble(Employee::getSalary).reversed()).forEach(System.out::println);

        // Q5. Highest Paid
        Employee highest = employees.stream().max(Comparator.comparingDouble(Employee::getSalary)).orElse(null);
        System.out.println("\nQ5: Highest Paid = " + highest);

        // Q6. Average Salary
        double avgSalary = employees.stream().mapToDouble(Employee::getSalary).average().orElse(0);
        System.out.println("\nQ6: Average Salary = " + avgSalary);

        // Q7. All names into a List
        List<String> names = employees.stream().map(Employee::getName).collect(toList());
        System.out.println("\nQ7: Names List = " + names);

        // Q8. Group by department
        Map<String, List<Employee>> grouped = employees.stream().collect(groupingBy(Employee::getDepartment));
        System.out.println("\nQ8: Group by Department = " + grouped);

        // Q9. Total salary per department
        Map<String, Double> salarySum = employees.stream().collect(groupingBy(Employee::getDepartment, summingDouble(Employee::getSalary)));
        System.out.println("\nQ9: Total Salary per Department = " + salarySum);

        // Q10. IT sorted by salary
        List<String> itSorted = employees.stream()
            .filter(e -> e.getDepartment().equals("IT"))
            .sorted(Comparator.comparingDouble(Employee::getSalary))
            .map(Employee::getName)
            .collect(toList());
        System.out.println("\nQ10: IT sorted by salary = " + itSorted);

        // Q11. Any employee earning < 40000?
        boolean anyLow = employees.stream().anyMatch(e -> e.getSalary() < 40000);
        System.out.println("\nQ11: Any salary < 40000? " + anyLow);

        // Q12. Comma-separated names
        String joined = employees.stream().map(Employee::getName).collect(joining(", "));
        System.out.println("\nQ12: CSV Names = " + joined);

        // Q13. Top 2 earners
        List<Employee> top2 = employees.stream()
            .sorted(Comparator.comparingDouble(Employee::getSalary).reversed())
            .limit(2).collect(toList());
        System.out.println("\nQ13: Top 2 Earners = " + top2);

        // Q14. Skip first 2 employees
        System.out.println("\nQ14: After Skipping 2:");
        employees.stream().skip(2).forEach(System.out::println);

        // Q15. Limit to 3 and print names
        System.out.println("\nQ15: First 3 Names:");
        employees.stream().limit(3).map(Employee::getName).forEach(System.out::println);

        // Q16. Min salary in HR
        Employee minHr = employees.stream()
            .filter(e -> e.getDepartment().equals("HR"))
            .min(Comparator.comparingDouble(Employee::getSalary)).orElse(null);
        System.out.println("\nQ16: Min HR Salary = " + minHr);

        // Q17. Partition by salary > 55000
        Map<Boolean, List<Employee>> partitioned = employees.stream()
            .collect(partitioningBy(e -> e.getSalary() > 55000));
        System.out.println("\nQ17: Partitioned = " + partitioned);

        // Q18. Map<Department, Avg Salary>
        Map<String, Double> deptAvg = employees.stream()
            .collect(groupingBy(Employee::getDepartment, averagingDouble(Employee::getSalary)));
        System.out.println("\nQ18: Avg Salary per Dept = " + deptAvg);

        // Q19. Sort by name, then salary
        System.out.println("\nQ19: Sort by Name & Salary:");
        employees.stream()
            .sorted(Comparator.comparing(Employee::getName).thenComparing(Employee::getSalary))
            .forEach(System.out::println);

        // Q20. Convert to Map<Id, Name>
        Map<Integer, String> idNameMap = employees.stream()
            .collect(toMap(Employee::getId, Employee::getName));
        System.out.println("\nQ20: Map<Id, Name> = " + idNameMap);

        // 🔹 Challenge 1: Name starts with "D" and ends with "a"
        System.out.println("\nChallenge 1: Name starts with D and ends with a:");
        employees.stream()
            .filter(e -> e.getName().startsWith("D") && e.getName().endsWith("a"))
            .forEach(System.out::println);

        // 🔹 Challenge 2: Departments with > 1 employee
        System.out.println("\nChallenge 2: Depts with >1 employee:");
        grouped.entrySet().stream()
            .filter(entry -> entry.getValue().size() > 1)
            .forEach(entry -> System.out.println(entry.getKey() + " → " + entry.getValue().size()));

        // 🔹 Challenge 3: Second highest salary
        Double secondHighest = employees.stream()
            .map(Employee::getSalary)
            .distinct()
            .sorted(Comparator.reverseOrder())
            .skip(1)
            .findFirst().orElse(null);
        System.out.println("\nChallenge 3: Second Highest Salary = " + secondHighest);
    }
}
