import java.util.Scanner;

public class search {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        int[] arr={5,12,14,6,78,19,1,23,26,35,37,7,52,86,47};
        for (int i = 0; i < arr.length-1; i++) {
            for (int j = i+1; j < arr.length ; j++) {
                if(arr[j]<arr[i]){
                    int temp=arr[j];
                    arr[j]=arr[i];
                    arr[i]=temp;
                }
            }
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}
