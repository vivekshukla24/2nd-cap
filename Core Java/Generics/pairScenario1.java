//Scenario A - Both String

public class clientClass {
    public static void main(String[] args) {
        pair<String, String> object=new pair<String, String>("1","Hello");
        System.out.println("{"+object.getObj1()+"="+object.getObj2()+"}");

    }
}
class pair<K,V>{
    private K obj1;
    private V obj2;

    public pair(K obj1,V obj2){
        this.obj1=obj1;
        this.obj2=obj2;
    }
    public K getObj1() {
        return obj1;
    }
    public V getObj2() {
        return obj2;
    }

}
