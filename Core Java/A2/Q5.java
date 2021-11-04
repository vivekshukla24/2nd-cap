abstract class shape {
    abstract void draw();
}
class line extends shape {
    public void draw(){
        System.out.println("Line is drawn");
    }
}
class rectangle extends shape {
    public void draw(){
        System.out.println("rectangle is drawn");
    }
}
class cube extends shape{
    public void draw(){
        System.out.println("cube is drawn");
    }
}
class square extends shape{
    public void draw(){
        System.out.println("square is drawn");
    }
}
public class main{
    public static void main(String[] args) {
        line l=new line();
        l.draw();
        rectangle r=new rectangle();
        r.draw();
        cube c=new cube();
        c.draw();
        square s=new square();
        s.draw();
    }
}
