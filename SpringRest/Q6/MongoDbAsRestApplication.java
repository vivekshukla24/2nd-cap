package com.mongoRest.Assignment;

import com.mongoRest.Assignment.domain.userRepo;
import com.mongoRest.Assignment.domain.users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MongoDbAsRestApplication implements CommandLineRunner {

	private final userRepo userrep;
	@Autowired
	public MongoDbAsRestApplication(userRepo userrep){
		this.userrep=userrep;
	}
	public static void main(String[] args) {
		SpringApplication.run(MongoDbAsRestApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		if(userrep.findAll().isEmpty()){
			userrep.save(new users("Vivek","1","45"));
			userrep.save(new users("Aditya","12","36"));
		}
		for(users user:userrep.findAll()) {
			System.out.println(user);
		}

	}
}
