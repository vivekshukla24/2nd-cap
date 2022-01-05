package Spring.Security.domain;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

    @GetMapping("/admin")
    public String adminPage(){
        return "Hello World Admin";
    }

}
