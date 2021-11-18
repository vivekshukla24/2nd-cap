public class MinMaxObj {
    public static void main(String[] args) {
        int[] input={56,34,7,3,54,3,34,34,53};
        client clientobj= new client(Integer.MAX_VALUE,Integer.MIN_VALUE);
        client unb=clientobj.min_max(input);
    }
}
class client{
    int max;
    int min;
    public client(int min, int max) {
        this.min = min;
        this.max = max;
    }

    public int getMax() {
        return max;
    }

    public int getMin() {
        return min;
    }

    client min_max(int[] arr){
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        client ret_obj= new client(min,max);
        return ret_obj;
    }
    @Override
    public String toString(){
        return min+" "+max;
    }
}