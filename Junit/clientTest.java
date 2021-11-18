import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class clientTest {
    client object1= new client(3,56);
    client object2 = new client(1,345);
    int[] input1={56,34,7,3,54,3,34,34,53};
    int[] input2 ={1,4,5,7,88,3,345,76,65};
    String expected1=object1.toString();
    String expected2=object2.toString();
    String actual1=object1.min_max(input1).toString();
    String actual2=object2.min_max(input2).toString();
    @Test
    void min_max() {
        assertEquals(expected1,actual1);
        assertEquals(expected2,actual2);
    }
}