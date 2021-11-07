import java.util.Scanner;

public class interest {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter your >Principle amount >interest rate >time in years");
        int p=s.nextInt();
        double r= s.nextDouble();
        int t=s.nextInt();

        double SI=p*t*r*0.01;
        double CI=p*Math.pow(1+r*0.01,t)-p;

        System.out.println("Simple Interest: "+(int)SI);
        System.out.println("Compound Interest: "+(int)CI);

    }
}
