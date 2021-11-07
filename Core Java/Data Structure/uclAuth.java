import java.util.HashMap;
import java.util.Scanner;

public class auth {
    public static void main(String[] args) {
        HashMap<String,Integer> user=new HashMap<String,Integer>();
        Scanner s= new Scanner(System.in);
        user.put("vivekshukla",12345);
        user.put("newuser",45678);
        System.out.println("Enter your username");
        String username=s.next();
        int count=0;
        for (int i = 0; i <5; i++) {
            if(count==3){
                System.out.println("Contact Admin");
                break;
            }
            if(user.containsKey(username)){
                System.out.println("Enter your password");
                int p=s.nextInt();
                if(user.get(username)==p){
                    System.out.println("Welcome: "+username);
                    break;
                }
                else{ count++; System.out.println("Wrong password"); }
            }
            else{ count++; System.out.println("You're fake");}
        }

    }
}
