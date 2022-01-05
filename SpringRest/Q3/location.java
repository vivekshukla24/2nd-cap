package SpringRest.zipcodes;

public class location {
	String zipcode;
	String state;
	String city;
	String county;
	
	public location(String zipcode, String state, String city, String county) {
		super();
		this.zipcode=zipcode;
		this.state = state;
		this.city = city;
		this.county = county;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCounty() {
		return county;
	}
	public void setCounty(String county) {
		this.county = county;
	}
	public String getZipcode() {
		return zipcode;
	}
	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}
	
	
}
