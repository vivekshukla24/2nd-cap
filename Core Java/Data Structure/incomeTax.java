import java.util.Scanner;

public class incomeTax {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int ctc=s.nextInt();
        if(ctc<=180000){
            System.out.println("Taxed Amount: "+0);
        }
        if(ctc>181000&&ctc<300001){
            System.out.println("Taxed Amount: "+ctc*0.1);
        }
        if(ctc>300000&&ctc<500001){
            System.out.println("Taxed Amount: "+ctc*0.2);
        }
        if(ctc>500000&&ctc<1000001){
            System.out.println("Taxed Amount: "+ctc*0.3);
        }
    }
}
