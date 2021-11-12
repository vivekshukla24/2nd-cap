import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class Q6replace {
    public static void main(String[] args) {
        List<String> words = new ArrayList<>();
        //adding words to the lists
        words.add("enough");
        words.add("india");
        words.add("this");
        words.add("closer");
        words.add("hindsight");
        words.add("random");
        words.add("nonstop");
        Predicate<String> length =(c) -> {
            if(c.length()%2==0){
                return true;
            }
            else return false;
        };
        //This will remove the word from the list if the word length is not even.
        words.stream().filter(length).collect(Collectors.toList()).forEach(System.out::println);
    }

}
