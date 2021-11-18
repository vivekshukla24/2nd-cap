package Greeting;

import org.springframework.stereotype.Service;

@Service
public class calculateInterest {
	public double result(double a,double b,double c) {
		return a*b*c*0.1;
	}
}
