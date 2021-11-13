import java.util.Scanner;

public class Q1calculator {

    public static void main(String[] args) {
        Scanner s= new Scanner(System.in);
        System.out.println("Add two numbers to the calculator: ");
        double a= s.nextDouble();
        double b= s.nextDouble();
        System.out.println("Your Choices 1)Add 2)Subtract 3)Multiply 4)Divide: ");
        int choice= s.nextInt();
        switch (choice){
            case 1:
                Calculator add = (x,y) -> System.out.println(x+y);
                add.foo(a,b);
                break;
            case 2:
                Calculator sub= (x,y) -> System.out.println(x-y);
                sub.foo(a,b);
                break;
            case 3:
                Calculator mul=(x,y) -> System.out.println(x*y);
                mul.foo(a,b);
                break;
            case 4:
                Calculator div=(x,y) -> System.out.println(x/y);
                div.foo(a,b);
                break;
            default:
                System.out.println("Invalid Input");
                break;
        }
    }
}
//Only one interface will work for all the lambda expression in the calculator class
interface Calculator{
    void foo(double a, double b);
}
