import java.io.IOException;
import java.net.URI;
import java.net.http.*;

public class Q6http {
    public static void main(String[] args) throws IOException, InterruptedException {
        String uri="https://httpbin.org/get";
        HttpRequest req= HttpRequest.newBuilder().uri(URI.create(uri)).GET().version(HttpClient.Version.HTTP_2).build();

        HttpClient client = HttpClient.newBuilder().build();
        HttpResponse<String> output= client.send(req, HttpResponse.BodyHandlers.ofString());
        System.out.println(output);
        output.headers().map().entrySet().forEach(System.out::println);
        System.out.println("----------------------------------");
        System.out.println(output.statusCode());
        System.out.println("----------------------------------");
        System.out.println(output.body());
    }
}
