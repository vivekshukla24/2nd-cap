package Greeting;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
@Controller
public class greet {
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String showindexPage() {
		return "index";
	} 
	@RequestMapping(value = "/helloword", method = RequestMethod.GET)
	public String greethandle() {
			return "helloword";
     }
}