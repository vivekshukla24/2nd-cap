package SpringRest.zipcodes;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class locationResource {	

	public List<location> locationlist= Arrays.asList(new location("99501","AK","ANCHORAGE","US"),
			new location("99509","AK","ANCHORAGE","US"),
			new location("66101","K","KANSAS CITY","US")
			);
	//to get all the instances of location class
	public List<location> getAll(){
		return locationlist;
	}	
	//To get one result with condition
	public location getLoc(String zipcode){
		return locationlist.stream().filter(s->s.getZipcode().equals(zipcode)).findFirst().get();
	}
	
	
	 
}