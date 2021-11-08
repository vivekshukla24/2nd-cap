//non generic classes can have genric methods

public class swap {
    public static void main(String[] args) {
        int[] arr = {12,6,8,3,5,9,45};
        int a=2;
        int b=5;
        non_gen obj= new non_gen();
        obj.swap_ele(arr,a,b);
        obj.print(arr);

    }
}
class non_gen{
    public <E> void swap_ele(int arr[],int i,int j){
        int temp=0;
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    public void print(int aar1[]){
        for (int i = 0; i < aar1.length; i++) {
            System.out.println(aar1[i]);
        }
    }
}
