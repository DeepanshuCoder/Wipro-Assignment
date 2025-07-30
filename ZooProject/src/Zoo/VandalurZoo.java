package Zoo;

import org.animals.*;

public class VandalurZoo {
    public static void main(String[] args) {
        Lion lion = new Lion();
        Tiger tiger = new Tiger();
        Deer deer = new Deer();
        Monkey monkey = new Monkey();
        Elephant elephant = new Elephant();
        Giraffe giraffe = new Giraffe();

        lion.display();
        System.out.println("---------------------");
        tiger.display();
        System.out.println("---------------------");
        deer.display();
        System.out.println("---------------------");
        monkey.display();
        System.out.println("---------------------");
        elephant.display();
        System.out.println("---------------------");
        giraffe.display();
    }
}
