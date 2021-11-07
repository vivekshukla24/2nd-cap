import java.util.Scanner;

public class result {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int i=3;
        int count=0;
        while(i>0){
            int marks=s.nextInt();
            if(marks>60){
                count++;
            }
            i--;
        }
        if(count == 3){
            System.out.println("Passed");
        }
        else if(count ==2){
            System.out.println("promoted");
        }
        else if(count == 1){
            System.out.println("Failed");
        }
    }
}
