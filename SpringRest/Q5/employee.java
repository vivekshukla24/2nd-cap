package Question5.domain;

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
