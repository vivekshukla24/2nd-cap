package CG.moviecatalogservice.Services;

import CG.moviecatalogservice.models.CatalogItem;
import CG.moviecatalogservice.models.Movie;
import CG.moviecatalogservice.models.Rating;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
@Service
public class MovieInfo {

    @Autowired
    RestTemplate restTemplate;

    @HystrixCommand(fallbackMethod = "getFallbackCatalogItem")
    public CatalogItem getCatalogItem(Rating rating) {
        Movie movie = restTemplate.getForObject("http://movie-info-service/movies/" + rating.getMovieId(), Movie.class);
        return new CatalogItem(movie.getName(), movie.getDescription(), rating.getRating());
    }
    //fallback method for getCatalog item method for hystrix
    public CatalogItem getFallbackCatalogItem(Rating rating){
        return new CatalogItem("Movie name not found","Desc Not found",rating.getRating());
    }
}
