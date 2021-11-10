import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
//Indicates that the annotated method is a test method.
//This annotation should be used only on parameterless static methods.
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface test{
}

public class Q1test {
    @test
    public method1(){
        System.out.println("Test Cases");
    }
    @test
    public method2(){
        System.out.println("Some test cases");
    }
}
