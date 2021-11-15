public class Transaction {
    Trader t;
    int year;
    int value;
    public Transaction(Trader t, int year, int value) {
        super();
        this.t = t;
        this.year = year;
        this.value = value;
    }
    public Trader getT() {
        return t;
    }
    public void setT(Trader t) {
        this.t = t;
    }
    public int getYear() {
        return year;
    }
    public void setYear(int year) {
        this.year = year;
    }
    public int getValue() {
        return value;
    }
    public void setValue(int value) {
        this.value = value;
    }
    @Override
    public String toString() {
        return "Transaction [t=" + t + ", year=" + year + ", value=" + value + "]";
    }


}
