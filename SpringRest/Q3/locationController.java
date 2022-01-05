package SpringRest.zipcodes;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class locationController {
	@Autowired
	locationResource lc;
	
	@RequestMapping("/all")
	public List<location> getAll() {
		return lc.getAll();
	}
	@RequestMapping("/all/{zipcode}")
	public location getone(@PathVariable String zipcode) {
		return lc.getLoc(zipcode);
	}
}
