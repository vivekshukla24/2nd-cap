import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@ComponentScan(basePackages ="Capgemini.Spring")
@PropertySource("dbConfir.properties")
public class jdbcAssignment {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context=new AnnotationConfigApplicationContext("Capgemini.Spring");
        properties p =context.getBean(properties.class);
        System.out.println(p);
    }
}
@Component
class properties{
    @Autowired
    @Value("${driverClass}")
    String driverClass;
    @Value("${url}")
    String url;
    @Value("${username}")
    String username;
    @Value("${password}")
    String password;

    @Override
    public String toString() {
        return "[ Driver class -"+driverClass+", URL - "+url+", Username -"+ username+", Password -"+password+ "]";
    }
}


//dbconfig.properties file

driverClass = intelliJ.IDEA.java.maven
url = www.google.com
username = vivek
password = qwert24
