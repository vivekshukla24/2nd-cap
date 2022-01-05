package Question5.domain;
import java.util.ArrayList;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class employeeService {
	@Autowired
	private employeeRepo empRep;
	
	//Not needed as no reference to this list 
	//List<employee> empList=new ArrayList<employee>();
	
	//To return all employees to controller
	public List<employee> allEmp() {
		List<employee> emp=  new ArrayList<employee>();
		empRep.findAll().forEach(emp::add);
		return emp;
	}
	
	//To find one employee with its id
	public employee getEmp(String id) { 
		return empRep.findById(id).orElse(null);
	}
	
	//To add a new employee
	public void addemp(employee e) {
		empRep.save(e);
	}
	//To delete an employee
	public String delEmp(String id) {
		empRep.deleteById(id);
		return "Employee delete success";
	}
	
	public employee updateEmp(employee e) {
		employee existingEmp=empRep.findById(e.getid()).orElse(null);
		existingEmp.setEmployeeName(e.getEmployeeName());
		existingEmp.setEmployeeDepartment(e.getEmployeeDepartment());
		existingEmp.setEmployeeDesignation(e.getEmployeeDesignation());
		existingEmp.setEmployeeSalary(e.getEmployeeSalary());
		return empRep.save(existingEmp);
	}
	
}
