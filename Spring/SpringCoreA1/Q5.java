import org.springframework.beans.factory.annotation.Required;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

class human{
    String name;

    phone p;

    @Resource
    gender g;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public gender getG() {
        return g;
    }
    public void setG(gender g) {
        this.g = g;
    }

    public phone getP() {
        return p;
    }
    @Required
    public void setP(phone p) {
        this.p = p;
    }

    @Override
    public String toString() {
        return "human{" +
                "name='" + name + '\'' +
                ", p=" + p +
                ", g=" + g +
                '}';
    }
}
@Component
class gender{
    String gender;

    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "gender{" +
                "gender='" + gender + '\'' +
                '}';
    }
}
@Component
class phone{
    long number;

    public phone(long number) {
        this.number = number;
    }


    @Override
    public String toString() {
        return "phone{" +
                "number=" + number +
                '}';
    }
}
public class Q5 {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("human.xml");
        human humanBeing = (human) context.getBean("Human");
        gender gender =humanBeing.getG();
        phone no=humanBeing.getP();
        System.out.println(gender);
        System.out.println(no);
        System.out.println(humanBeing);
    }
}



//XML file for the question (human.xml)
<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
    <context:annotation-config/>
    <bean id="Human" class="Capgemini.Spring.human">
        <property name="name" value="Vivek Shukla"/>
        <property name="p" ref="phone"/>
    </bean>
    <bean id="gender" class="Capgemini.Spring.gender">
        <property name="gender" value="male"/>
    </bean>
    <bean id="phone" class="Capgemini.Spring.phone">
        <constructor-arg index="0" type="long" value="9911964666"/>
    </bean>
</beans>
