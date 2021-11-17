import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.Arrays;

class Address {
    String country;
    String state;
    String city;
    int zip;
    int street;

    public Address(String country, String state, String city, int zip, int street) {
        this.country = country;
        this.state = state;
        this.city = city;
        this.zip = zip;
        this.street = street;
    }

    public String getCountry() {
        return country;
    }
    public String getState() {
        return state;
    }
    public String getCity() {
        return city;
    }
    public int getZip() {
        return zip;
    }
    public int getStreet() {
        return street;
    }

    @Override
    public String toString() {
        return "{Country:- "+getCountry()+", City:-"+getCity()+", State:-"+getState()+", Zipcode:-"+getZip()+", Street:-"+getStreet()+"}";
    }
}
class Customer{
    private int customerId;
    private String customerName;
    private long customerContact;
    private Address customerAddress;

    public Customer(int customerId, String customerName, long customerContact, Address customerAddress) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerContact = customerContact;
        this.customerAddress = customerAddress;
    }
    public void showDetails(){
        System.out.println("Name:-"+getCustomerName()+" ID:-"+getCustomerId()+" Contact:-"+getCustomerContact()+" Address:-"+getCustomerAddress());
    }

    public int getCustomerId() {
        return customerId;
    }
    public String getCustomerName() {
        return customerName;
    }
    public long getCustomerContact() {
        return customerContact;
    }
    public Address getCustomerAddress() {
        return customerAddress;
    }
}

public class Q1main{
    public static void main(String[] args) {
        ClassPathXmlApplicationContext context= new ClassPathXmlApplicationContext("Spring.xml");
        Customer cust1 = (Customer) context.getBean("Customer");
        Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);
        cust1.showDetails();
    }
}


//XML file (Spring.xml)
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE beans PUBLIC "-//SPRING//DTD BEAN//EN" "http://www.springframework.org/dtd/spring-beans.dtd">
<beans>
<bean id="Customer" class="Capgemini.Spring.Customer">
    <constructor-arg index="0" type="int" value="12"/>
    <constructor-arg index="1" value="Dev"/>
    <constructor-arg index="2" type="long" value="9372537382"/>
    <constructor-arg index="3" ref="Address"/>
</bean>
    <bean id="Address" class="Capgemini.Spring.Address">
        <constructor-arg index="0" value="India"/>
        <constructor-arg index="1" value="delhi"/>
        <constructor-arg index="2" value="New Delhi"/>
        <constructor-arg index="3" type="int" value="110091"/>
        <constructor-arg index="4" value="3"/>
    </bean>
</beans>


//Junit Testing class (CustomerTest.java)
import org.junit.jupiter.api.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import static org.junit.jupiter.api.Assertions.*;

class CustomerTest {
    ClassPathXmlApplicationContext context= new ClassPathXmlApplicationContext("Spring.xml");
    Customer cust1 = (Customer) context.getBean("Customer");
    Customer cust2 = (Customer) context.getBean("Customer");
    Customer cust4 = (Customer) context.getBean("Customer");
    Customer cust5 = (Customer) context.getBean("Customer");

    @Test
    void showDetails() {
        assertAll(
                () -> assertEquals(cust1,cust2,"They are supposed to be equal as they come from same bean"),
                () -> assertEquals(cust4,cust5,"They are supposed to be equal as they come from same bean")
        );
    }
}
