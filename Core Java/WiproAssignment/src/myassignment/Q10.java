package myassignment;

public class Q10 {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Please provide number of eggs as command-line argument.");
            return;
        }

        int eggs = Integer.parseInt(args[0]);
        int gross = eggs / 144;
        int remaining = eggs % 144;
        int dozen = remaining / 12;
        int leftover = remaining % 12;

        System.out.println("Your number of eggs is " + gross + " gross, " + dozen + " dozen, and " + leftover);
    }
}

//Click on the run command then click run as -> Run Congifurations -> Arguments -> Program Arguments 
// Then Type the I/p - 1342
//1342 / 144 = 9 gross
//Remaining = 1342 % 144 = 130
//130 / 12 = 10 dozen
//130 % 12 = 10 left

