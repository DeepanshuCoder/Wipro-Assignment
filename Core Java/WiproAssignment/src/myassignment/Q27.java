package myassignment;

public class Q27 {
    
    // Step 1: Define the Enum
    enum Currency {
        TEN, TWENTY, FIFTY, HUNDRED, TWO_HUNDRED, FIVE_HUNDRED
    }

    public static void main(String[] args) {

        // Step 2: Loop through the enum values
        for (Currency note : Currency.values()) {
            System.out.println("Currency: " + note);

            // Step 3: Switch statement with descriptions
            switch (note) {
                case TEN:
                    System.out.println("Description: ₹10 note, usually brown in color.");
                    break;
                case TWENTY:
                    System.out.println("Description: ₹20 note, orange in color with Mahatma Gandhi image.");
                    break;
                case FIFTY:
                    System.out.println("Description: ₹50 note, purple colored with modern design.");
                    break;
                case HUNDRED:
                    System.out.println("Description: ₹100 note, lavender in color.");
                    break;
                case TWO_HUNDRED:
                    System.out.println("Description: ₹200 note, bright yellow in color.");
                    break;
                case FIVE_HUNDRED:
                    System.out.println("Description: ₹500 note, gray-green in color, used for larger transactions.");
                    break;
            }

            System.out.println(); // Line break for readability
        }
    }
}
