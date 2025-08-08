package myinterface;

public class Circle implements Drawable, Fillable {

    @Override
    public void drawingColor() {
        System.out.println("Circle drawing color: Blue");
    }

    @Override
    public void thickness() {
        System.out.println("Circle thickness: 3px");
    }

    @Override
    public void fillingColor() {
        System.out.println("Circle filling color: Light Blue");
    }

    @Override
    public void size() {
        System.out.println("Circle size: Radius 30 units");
    }
}
