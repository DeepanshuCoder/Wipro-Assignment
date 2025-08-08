package myinterface;

public class Line implements Drawable, Fillable {

    @Override
    public void drawingColor() {
        System.out.println("Line drawing color: Black");
    }

    @Override
    public void thickness() {
        System.out.println("Line thickness: 2px");
    }

    @Override
    public void fillingColor() {
        System.out.println("Line filling color: Not applicable (none)");
    }

    @Override
    public void size() {
        System.out.println("Line size: 100 units length");
    }
}

