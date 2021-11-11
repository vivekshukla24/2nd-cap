import java.util.HashMap;

public class Q7mix {
    public static void main(String[] args) {
        StringBuilder mix=new StringBuilder();
        HashMap<Integer,String> foo=new HashMap<>();
        foo.put(1,"nice");
        foo.put(2,"done");
        foo.put(3,"join");
        foo.put(4,"aggregate");
        //this mwthod will make the key value pairs a string using string builder
        foo.entrySet().forEach(t-> mix.append(t));
        System.out.println(mix);
    }
}
