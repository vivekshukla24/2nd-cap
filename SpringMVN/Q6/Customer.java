package com.Springboot.controller;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.stereotype.Service;
@Service
public class Customer {
	
	@NotBlank(message="Username cannot be empty")
	@Size(min=8,max=20,message="Username should be 8-20 char long")
	private String username;
	@NotBlank(message="Password cannot be empty")
	@Size(min=8,max=20,message="Password should be 8-20 char long")
	@Pattern(regexp="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$", message="P/W needs to be Alphanumeric, Special Char")
	private String password;
	@NotNull
	@NotBlank(message="Email cannot be empty")
	@Email
	private String email;	
	@NotBlank(message="Contact cannot be empty")
	private String contact;
	@NotBlank(message="City should be selected")
	private String city;
	@NotNull(message="Zipcode can't be empty")
	@Size(min=6,max=6, message="Zipcode should be exactly 6 char long")
	private String zipcode;
	
	public Customer() {
	}
	
	public Customer(String username, String password, String email, String contact, String city, String zipcode) {
		super();
		this.username = username;
		this.password = password;
		this.email = email;
		this.contact = contact;
		this.city = city;
		this.zipcode = zipcode;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getZipcode() {
		return zipcode;
	}
	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	@Override
	public String toString() {
		return "Customer [username=" + username + ", password=" + password + ", email=" + email + ", contact=" + contact
				+ ", city=" + city + ", zipcode=" + zipcode + "]";
	}
	
	
}	
