import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MinMaxFinderTest {
    MinMaxFinder obj= new MinMaxFinder();

    @Test
    void findminmax() {
        int[] expected1={56,34,7,3,54,3,34,34,53};
        int[] expected2={57,98,4,6,3,90,23,87};
        int[] expected3={99,105,78,34,8,5,999};
        int[] expected4={34,87,56,34,94,5,67,4,3,5,5,6,7,5,5,7,777,4,4,3,33};
        int[] actual1={3,56};
        int[] actual2={3,98};
        int[] actual3={5,999};
        int[] actual4={3,777};
        assertAll(() -> assertArrayEquals(actual1,obj.findminmax(expected1)),
                  () -> assertArrayEquals(actual2,obj.findminmax(expected2)),
                  () -> assertArrayEquals(actual3,obj.findminmax(expected3)),
                  () -> assertArrayEquals(actual4,obj.findminmax(expected4))
        );
    }
}