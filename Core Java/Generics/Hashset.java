import java.util.HashSet;

public class sets {
    public static void main(String[] args) {
        HashSet<employee> act= new HashSet();
        employee a=new employee(1,"Vivek",30000,"Dev");
        employee b=new employee(2,"Dev",20000,"Q/A");
        employee c=new employee(3,"Aditya",30000,"Dev");
        employee d=new employee(4,"Saurav",50000,"Manager");
        act.add(a);
        act.add(b);
        act.add(c);
        act.add(d);
        //printing all the details of the objects
        System.out.println(act);
    }
}
class employee{
    int id,salary;
    String name,dept;
    public employee(int id, String name, int salary, String dept){
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.dept=dept;
    }
    @Override
    public String toString(){
        return "{ID: "+id+" Name: "+name+" Salary: "+salary+" Department: "+dept+"}";
    }
    @Deprecated
    public void displayDetails(){
        System.out.println("{ID: "+id+" Name: "+name+" Salary: "+salary+" Department: "+dept+"}");
    }
}
