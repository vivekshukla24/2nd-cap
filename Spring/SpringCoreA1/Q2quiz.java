import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.ApplicationContext;

import java.util.List;
import java.util.Map;
import java.util.Set;

class Question{
    private int questionId;
    private String question;
    private List<String> answer;
    //private Set<String> answer;
    //private Map<Integer,String> answer;

    //Constructor for maps case
    //public Question(int questionId, String question, Map<Integer, String> answer) {
    //    this.questionId = questionId;
    //     this.question = question;
    //    this.answer = answer;
    //}

    //Constructor For sets case
    //public Question(int questionId, String question, Set<String> answer) {
    //    this.questionId = questionId;
    //    this.question = question;
    //    this.answer = answer;
    //}

    //Constructor For Lists case
    public Question(int questionId, String question, List<String> answer) {
        this.questionId = questionId;
        this.question = question;
        this.answer = answer;
     }

    public int getQuestionId() {
        return questionId;
    }
    public String getQuestion() {
        return question;
    }

    //public Map<Integer, String> getAnswer() {
    //    return answer;
    //}
    //getter for sets case
    //public Set<String> getAnswers() {
    //    return answer;
    //}

    //getter for lists case
    public List<String> getAnswers() {
        return answer;
    }


    @Override
    public String toString() {
        return "Question{" +
                "questionId=" + questionId +
                ", question='" + question + '\'' +
                ", answer=" + answer +
                '}';
    }
}
public class Q2quiz {
    public static void main(String[] args) {
        ApplicationContext quizContext= new ClassPathXmlApplicationContext("quiz.xml");
        Question ques1 = (Question) quizContext.getBean("Question1");
        //Question ques2 = (Question) quizContext.getBean("Question2");
        //Question ques3 = (Question) quizContext.getBean("Question3");
        System.out.println(ques1);
        //System.out.println(ques2);
        //System.out.println(ques3);
    }
}


//XML file (quiz.xml) Uncomment per case and use
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE beans PUBLIC "-//SPRING//DTD BEAN//EN" "http://www.springframework.org/dtd/spring-beans.dtd">

<beans>

<!-- Uncomment for Lists case-->
    <bean id="Question1" class="Capgemini.Spring.Question">
    <constructor-arg index="0" type="int" value="1"/>
    <constructor-arg index="1" value="What is inheritance?"/>
    <constructor-arg index="2">
            <list>
                <value>When baseclass inherits the properties of parent it's called inheritance</value>
            </list>
    </constructor-arg>
    </bean>



<!-- Uncomment for sets case-->
<!--    <bean id="Question2" class="Capgemini.Spring.Question">-->
<!--        <constructor-arg index="0" type="int" value="2"/>-->
<!--        <constructor-arg index="1" value="What is abstract class?"/>-->
<!--        <constructor-arg index="2">-->
<!--            <set>-->
<!--                <value>Abstract class can be inherited but cannot be instantiated</value>-->
<!--            </set>-->
<!--        </constructor-arg>-->
<!--    </bean>-->

<!-- Comment this Maps part to try others -->
<!--    <bean id="Question3" class="Capgemini.Spring.Question">-->
<!--        <constructor-arg index="0" type="int" value="3"/>-->
<!--        <constructor-arg index="1" value="What is data structure?"/>-->
<!--        <constructor-arg index="2">-->
<!--            <map key-type="java.lang.Integer" value-type="java.lang.String">-->
<!--                <entry key="3" value="It stores multiple types of data in a indexed form"/>-->
<!--            </map>-->
<!--        </constructor-arg>-->
<!--    </bean>-->
</beans>



//Test cases for question and all cases
import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import static org.junit.jupiter.api.Assertions.*;
class QuestionTest {
    ApplicationContext quizContext= new ClassPathXmlApplicationContext("quiz.xml");
    Question ques1 = (Question) quizContext.getBean("Question1");
    @Test
    void getQuestionId() {
        assertEquals(1,ques1.getQuestionId());
    }

    @Test
    void getQuestion() {
        assertEquals("What is inheritance?",ques1.getQuestion());
    }
}
