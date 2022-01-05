package Question5.domain;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {
	
	@Autowired
	employeeService empSer;
	
	
	@GetMapping("/employee")
	//To get the list of all employees in JSON format
	public List<employee> allemployees() {
		return empSer.allEmp();
	}
	
	@GetMapping("/employee/{id}")
	public employee getOne(@PathVariable String id) {
		return empSer.getEmp(id);
	}
	
	@PostMapping("/employee")
	public void addemp(@RequestBody employee obj) {
		empSer.addemp(obj);
	}
	
	@DeleteMapping("/employee/{id}")
	public String DelOne(@PathVariable String id) {
		return empSer.delEmp(id);
	}
	@PutMapping("/employee")
	public employee updateOne(@RequestBody employee e) {
		return empSer.updateEmp(e);
	}
}
