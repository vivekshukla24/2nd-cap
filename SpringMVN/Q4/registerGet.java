package webapp;

import java.util.HashMap;

import org.springframework.stereotype.Service;

@Service
public class registerGet {
	HashMap<String, String> db= new HashMap<String,String>();
	  
	void register(String a, String b) {
		db.put(a, b);
	}
	boolean verify(String x, String y) {
		if(db.containsKey(x)) {
			if(db.get(x)==y){
				return true;
			}
			else return false;
		}
		else {
			return false;
		}
	}
	
}
