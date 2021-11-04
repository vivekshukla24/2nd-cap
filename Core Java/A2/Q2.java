abstract class employee{
abstract public void salary();
}
class manager extends employee{
    int incentive=100;
    int manager_salary=500;
    public void salary(){
        System.out.println("Manager Salary:"+(incentive+manager_salary));
    }
}
class labour extends employee{
    int overtime=30;
    int labour_salary=150;
    public void salary(){
        System.out.println("Labour Salary:"+(overtime+labour_salary));
    }
}
public class client {
    public static void main(String[] args) {
        manager m=new manager();
        labour l=new labour();
        m.salary();
        l.salary();
    }
}
