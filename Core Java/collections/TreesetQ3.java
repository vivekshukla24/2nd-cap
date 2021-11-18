package collections;
import java.util.*;


class Employees {
    private String name;
    private int id;
    private double sal;
    private String departments;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public double getSal() {
        return sal;
    }
    public void setSal(double sal) {
        this.sal = sal;
    }
    public String getDepartments() {
        return departments;
    }
    public void setDepartments(String departments) {
        this.departments = departments;
    }
    public Employees(String name, int id, double sal, String departments) {
        super();
        this.name = name;
        this.id = id;
        this.sal = sal;
        this.departments = departments;
    }
    @Override
    public String toString() {
        return "Employee [name=" + name + ", id=" + id + ", sal=" + sal + ", departments=" + departments + "]";
    }

}



public class TreesetQ3 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Choose your sorting category");
        System.out.println("1.name  2.id  3.salary   4.department");
        int choose = scanner.nextInt();
        //char choose = scanner.next().charAt(0);
        Set<Employees> s = null;
        if(choose == 1) {
            s = new TreeSet<>(new nameComp());
        }
        else if(choose == 2) {
            s = new TreeSet<>(new idComp());
        }
        else if(choose == 3) {
            s = new TreeSet<>(new salComp());
        }
        else if(choose == 4) {
            s = new TreeSet<>(new depComp());
        }
        s.add(new Employees ("Vivek",123,50000,"Dev"));
        s.add(new Employees ("Saurav",456,60000,"HR"));
        s.add(new Employees ("Aditya",789,30000,"Mgmt"));
        s.add(new Employees("Gautam",111,90000,"Mgmt"));
        s.add(new Employees("Dev",222,10000,"Dev"));
        for(Employees temp:s) {
            System.out.println(temp);

        }

    }

}

class idComp implements Comparator<Employees> {

    @Override
    public int compare(Employees o1, Employees o2) {
        if (o1.getId() > o2.getId()) {
            return 1;
        } else {
            return -1;
        }
    }

}

class nameComp implements Comparator<Employees> {

    @Override
    public int compare(Employees o1, Employees o2) {
        return o1.getName().compareTo(o2.getName());
    }

}

class depComp implements Comparator<Employees> {

    @Override
    public int compare(Employees o1, Employees o2) {
        return o1.getDepartments().compareTo(o2.getDepartments());
    }

}

class salComp implements Comparator<Employees> {

    @Override
    public int compare(Employees o1, Employees o2) {
        if (o1.getSal() > o2.getSal()) {
            return 1;
        } else {
            return -1;
        }

    }

}
