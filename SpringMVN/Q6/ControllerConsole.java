package com.Springboot.controller;
import javax.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ControllerConsole {
	
	@GetMapping("/login")
	public String showLoginPage(ModelMap model) {
		model.addAttribute("LoginData", new Customer());
		return "login";
	}
	
	@PostMapping("/login")
	public String getdetails(@ModelAttribute("LoginData") @Valid Customer LoginData, BindingResult result, ModelMap model) {
		if(result.hasErrors()) {
			System.out.println(result);
			return "login";
		}
		else {
			System.out.println(result);
			model.put("email", LoginData.getEmail());
			model.put("password", LoginData.getPassword());
			model.put("city", LoginData.getCity());
			model.put("username", LoginData.getUsername());
			model.put("zipcode", LoginData.getZipcode());
			model.put("contact", LoginData.getContact());
			return "SuccessPage";
		}			
	}
}
