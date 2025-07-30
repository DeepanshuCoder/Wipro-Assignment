package myhouse;

import java.util.Arrays;

public class Kitchen {
    public void showAppliances() {
        // Create array of kitchen appliances
        String[] appliances = {"Fridge", "Microwave", "Oven", "Toaster", "Mixer"};

        System.out.println("Appliances in the kitchen:");
        for (String item : appliances) {
            System.out.println("- " + item);
        }

        // Copy to a new array
        String[] copiedAppliances = Arrays.copyOf(appliances, appliances.length);

        System.out.println("\nCopied appliances list:");
        for (String item : copiedAppliances) {
            System.out.println("- " + item);
        }
    }
}

