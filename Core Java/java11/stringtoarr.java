import java.util.ArrayList;
import java.util.Arrays;

public class stringtoarr {
    public static void main(String[] args) {
        String str="A quick brown fox jumps over lazy dog";
        ArrayList<String> strarr=new ArrayList<>();
        //this will divide the string recursivly when it encounters a space
        strarr.addAll(Arrays.asList(str.split(" ")));
        System.out.println(strarr);
        String[] array= strarr.toArray(new String[0]);
        Arrays.stream(array).forEach(t-> System.out.println(t));
    }
}
