import java.util.HashMap;
import java.util.Random;
//put random numbers in hashmap
public class nums {
    public static void main(String[] args) {
        HashMap<Integer,Double> store=new HashMap<Integer,Double>();
        Random r=new Random();
        int max=45;
        double range=8.76;
        double min=7;
        for (int i = 0; i < 10; i++) {
            int x=(int)(r.nextInt(max));
            double y=range+r.nextDouble()-min;
            store.put(x,y);
            System.out.println(x+" "+y);
        }
        System.out.println(" ");
        System.out.println(store);
    }
}
