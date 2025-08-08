package myinterface;

public class Square implements Drawable, Fillable {

    @Override
    public void drawingColor() {
        System.out.println("Square drawing color: Red");
    }

    @Override
    public void thickness() {
        System.out.println("Square thickness: 4px");
    }

    @Override
    public void fillingColor() {
        System.out.println("Square filling color: Yellow");
    }

    @Override
    public void size() {
        System.out.println("Square size: Side 50 units");
    }
}

