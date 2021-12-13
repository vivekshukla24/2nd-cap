package CG.moviecatalogservice.resources;


import CG.moviecatalogservice.Services.MovieInfo;
import CG.moviecatalogservice.Services.UserRatingInfo;
import CG.moviecatalogservice.models.CatalogItem;
import CG.moviecatalogservice.models.UserRating;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/catalog")
public class CatalogResource {
    @Autowired
    MovieInfo movieInfo;
    @Autowired
    UserRatingInfo userRatingInfo;

    @Autowired
    private RestTemplate restTemplate;

    @RequestMapping("/{userId}")
    public List<CatalogItem> getCatalog(@PathVariable("userId") String userId) {

        UserRating userRating = userRatingInfo.getUserRating(userId);
        return userRating.getRatings().stream()
                .map(rating -> movieInfo.getCatalogItem(rating))
                .collect(Collectors.toList());
    }
//Moved to Separate classes to deal with problem of proxy class wrapper - Granular Fallback refactoring
//    @HystrixCommand(fallbackMethod = "getFallbackCatalogItem")
//    private CatalogItem getCatalogItem(Rating rating) {
//        Movie movie = restTemplate.getForObject("http://movie-info-service/movies/" + rating.getMovieId(), Movie.class);
//        return new CatalogItem(movie.getName(), movie.getDescription(), rating.getRating());
//    }
//    //fallback method for getCatalog item method for hystrix
//    private CatalogItem getFallbackCatalogItem(Rating rating){
//        return new CatalogItem("Movie name not found","Desc Not found",rating.getRating());
//    }
//    @HystrixCommand(fallbackMethod = "getFallbackUserRating")
//    private UserRating getUserRating(@PathVariable("userId") String userId) {
//        return restTemplate.getForObject("http://ratings-data-service/ratingsdata/user/" + userId, UserRating.class);
//    }
//    //fallback method for getUserRating item method for hystrix
//    private UserRating getFallbackUserRating(@PathVariable("userId")String userID){
//        UserRating userRating = new UserRating();
//        userRating.setUserId(userID);
//        userRating.setRatings(Arrays.asList(new Rating("0",0)));
//        return userRating;
//    }
    public List<CatalogItem> getFallbackCatalog(@PathVariable("userId") String userId){
        return Arrays.asList(new CatalogItem("No Movie","No Description",0));
    }


}