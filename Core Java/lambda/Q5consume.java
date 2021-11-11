import java.util.ArrayList;
import java.util.List;
import java.util.function.UnaryOperator;
import java.util.stream.Collectors;

public class Q5consume {
    public static void main(String[] args) {
        List<String> join = new ArrayList<>();
        join.add("enough");
        join.add("india");
        join.add("this");
        join.add("closer");
        join.add("hindsight");
        join.add("random");
        join.add("nonstop");
        join.replaceAll(new change());
        join.stream().collect(Collectors.toList()).forEach(System.out::println);

    }
}
class change implements UnaryOperator<String>{
    @Override
    public String apply(String s) {
        return s.toUpperCase();
    }
}
