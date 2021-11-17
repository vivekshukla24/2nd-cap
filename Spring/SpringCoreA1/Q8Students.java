import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import javax.annotation.PreDestroy;
import javax.annotation.PostConstruct;

class Student{

    String name;

    public Student(String name) {
        super();
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public void getDetails()
    {
        System.out.println("the name of the student is: "+getName());
    }
    @PostConstruct
    public void myInit()
    {
        System.out.println("myInit method started");
    }
    @PreDestroy
    public void myDestroy()
    {
        System.out.println("myInit method started");
    }
}
public class Q8Students {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("student.xml");
        ((ConfigurableApplicationContext) context).registerShutdownHook();
        Student obj = (Student) context.getBean("student");
        obj.getDetails();
    }
}


//XML file (student.xml)

<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">
    <bean id ="student" class="Capgemini.Spring.Student" init-method="myInit" destroy-method="myDestroy">
        <constructor-arg  index="0" type = "java.lang.String" value="Anuradha"/>
    </bean>
</beans>
