package webapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
	@Autowired
	registerGet obj;
	public boolean validateUser(String email, String password) {
		return obj.verify(email, password);
		
	}
}