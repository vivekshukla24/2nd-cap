import java.util.ArrayList;
import java.util.List;

public class Q4join {
    public static void main(String[] args) {
        StringBuilder build = new StringBuilder();
        List<String> join = new ArrayList<>();

        join.add("enough");
        join.add("india");
        join.add("this");
        join.add("closer");
        join.add("hindsight");
        join.add("random");
        join.add("nonstop");
        //Consumer interface
        join.forEach(t -> build.append(t.charAt(0)));
        System.out.println("The resultant string using string builder");
        System.out.println(build);
    }
}
