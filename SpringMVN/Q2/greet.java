package Greeting;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
@Controller
public class greet {
	@Autowired
	calculateInterest obj;
	
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String showindexPage() {
		return "index";
	}
	@RequestMapping(value = "/index", method = RequestMethod.POST)
	public String getinfo(ModelMap model, @RequestParam double Prin,
			@RequestParam double years, @RequestParam double interest) {
			model.put("Int", obj.result(Prin, interest, years));
			return "result";
	}
}