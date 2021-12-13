package CG.moviecatalogservice.Services;

import CG.moviecatalogservice.models.CatalogItem;
import CG.moviecatalogservice.models.Movie;
import CG.moviecatalogservice.models.Rating;
import CG.moviecatalogservice.models.UserRating;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

@Service
public class UserRatingInfo {

    @Autowired
    private RestTemplate restTemplate;

    @HystrixCommand(fallbackMethod = "getFallbackUserRating")
    public UserRating getUserRating(@PathVariable("userId") String userId) {
        return restTemplate.getForObject("http://ratings-data-service/ratingsdata/user/" + userId, UserRating.class);
    }
    //fallback method for getUserRating item method for hystrix
    public UserRating getFallbackUserRating(@PathVariable("userId")String userID){
        UserRating userRating = new UserRating();
        userRating.setUserId(userID);
        userRating.setRatings(Arrays.asList(new Rating("0",0)));
        return userRating;
    }
}
