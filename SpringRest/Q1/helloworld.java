package SpringRest.zipcodes;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloworld {
	@RequestMapping("/greet")
	public String Greet() {
		return "Hello World";
	}
}
