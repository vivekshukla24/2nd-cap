abstract class bank{
   abstract public void disp();
}
class savings_Account extends bank{
    double bal;
    double fd;
    public savings_Account(double bal,double fd){
        this.bal=bal;
        this.fd=fd;
    }
    public void disp(){
        System.out.println("Total money in saving:"+(bal+fd));
    }
    public double get(){
        return bal+fd;
    }
}
class current_Account extends bank{
    double bal;
    double cc;
    public current_Account(double bal,double cc){
        this.bal=bal;
        this.cc=cc;
    }
    public void disp(){
        System.out.println("Total money in current: "+(bal+cc));
    }
    public double get(){
        return bal+cc;
    }
}

public class mod {
    public static void main(String[] args) {
        savings_Account s=new savings_Account(30000,4000);
        current_Account c=new current_Account(500000,20000);
        s.disp();
        c.disp();
        double totalAmount=s.get()+c.get();
        System.out.println("The total money in bank: "+totalAmount);
    }
}
