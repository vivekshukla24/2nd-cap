//A singleton class can have only one object
//1. static object int the class to be made singleton
//2. A private constructor inside the class.
//3. A public static method that returns the static object created int the first step.
public class singleton {
    public static void main(String[] args) {
        ex object=ex.return_obj();
    }
}

class ex{
    static ex obj= new ex();
    private ex(){

    }
    public static ex return_obj(){
        return obj;
    }
}
