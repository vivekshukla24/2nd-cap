package webapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

	@Autowired
	private LoginService loginService;

	@Autowired
	private registerGet registerobj;
	
	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public String registerPage() {
		return "register";
	}
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String registeruser(ModelMap model, @RequestParam String name,
			@RequestParam String password, @RequestParam String email) {
		   registerobj.register(email,password);
		   model.put("message", "Registration Succesfull");
		return "login";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String showLoginPage() {
		return "login";
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String handleUserLogin(ModelMap model, @RequestParam String name,
			@RequestParam String password, @RequestParam String email) {
		
		
		if (loginService.validateUser(email, password)) {
			model.put("email", email);
			return "welcome";
		}
		else {
			model.put("errorMessage", "Either your email or password is wrong");
			return "error";
		}
	}
}
