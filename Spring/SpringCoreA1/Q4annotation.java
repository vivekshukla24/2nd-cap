//Ques-4
// This Answer contains all the annotations asked by the question.


//Repository class
import org.springframework.data.repository.CrudRepository;
@Repository
public interface employeeRepo extends CrudRepository<employee, String> {

}

//This is the serivce class
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

//This is the controller class
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


//This is the employee class
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class employee {

	@Id
	String id;
	String employeeName;
	String employeeDepartment;
	String employeeDesignation;
	String employeeSalary;

	public employee() {

	}

	public employee(String id, String employeeName, String employeeDepartment, String employeeDesignation,
			String employeeSalary) {
		super();
		this.id = id;
		this.employeeName = employeeName;
		this.employeeDepartment = employeeDepartment;
		this.employeeDesignation = employeeDesignation;
		this.employeeSalary = employeeSalary;
	}

	public String getid() {
		return id;
	}
	public void setid(String id) {
		this.id = id;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public String getEmployeeDepartment() {
		return employeeDepartment;
	}
	public void setEmployeeDepartment(String employeeDepartment) {
		this.employeeDepartment = employeeDepartment;
	}
	public String getEmployeeDesignation() {
		return employeeDesignation;
	}
	public void setEmployeeDesignation(String employeeDesignation) {
		this.employeeDesignation = employeeDesignation;
	}
	public String getEmployeeSalary() {
		return employeeSalary;
	}
	public void setEmployeeSalary(String employeeSalary) {
		this.employeeSalary = employeeSalary;
	}

}

//application.properties file
spring.jpa.properties.hibernate.globally_quoted_identifiers=true
spring.jpa.hibernate.ddl-auto=update
