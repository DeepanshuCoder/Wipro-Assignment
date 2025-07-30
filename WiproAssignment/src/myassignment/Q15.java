package myassignment;

class Q15 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 1, 2, 3, 4, 5, 1, 2};
        java.util.Map<Integer, Integer> map = new java.util.HashMap<>();
        for (int num : arr) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        for (var entry : map.entrySet()) {
            System.out.println("Element: " + entry.getKey() + " Count: " + entry.getValue());
        }
    }
}