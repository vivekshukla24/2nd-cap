public class str_a3 {
    public static void main(String[] args) {
        //Q1.
        String str="Hello World";
        System.out.println(str.length());
        //Q2.
        String a="Hello,";
        String b="How are you?";
        String x=a.concat(b);
        System.out.println(x);
        //Q3.
        String one="Java String pool refers to collection of Strings which are stored in heap memory";
        System.out.println(one.toLowerCase());
        System.out.println(one.toUpperCase());
        System.out.println(one.replace('a','$'));
        System.out.println(one.contains("collection"));
        String two="java string pool refers to collection of strings which are stored in heap memory";
        System.out.println(one.compareTo(two));
        System.out.println(one.equals(two));

        //Assignment on string buffer
        String l="StringBuffer";
        String m="is a peer class of String";
        String n="that provides much of";
        String o="the functionality of strings";
        StringBuffer p=new StringBuffer();
        p.append(l);
        p.append(" "+m);
        p.append(" "+n);
        p.append(" "+o);
        System.out.println(p);
        //part-2
        StringBuffer in=new StringBuffer("It is used to at the specified index");
        in.insert(14,"insert text ");
        System.out.println(in);
        //part-3
        StringBuffer rev=new StringBuffer("This method returns the reversed object on which it was called");
        System.out.println(rev.reverse());


        //Assignment on StringBuilder
        StringBuilder q=new StringBuilder();
        q.append(l);
        q.append(" "+m);
        q.append(" "+n);
        q.append(" "+o);
        System.out.println(q);
        //part-2
        StringBuilder s1=new StringBuilder("It is used to at the specified index");
        s1.insert(14,"insert text ");
        System.out.println(s1);
        //part-3
        StringBuilder s2=new StringBuilder("This method returns the reversed object on which it was called");
        System.out.println(s2.reverse());
    }
}
