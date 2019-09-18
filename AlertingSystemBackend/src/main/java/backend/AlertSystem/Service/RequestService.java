package backend.AlertSystem.Service;

import backend.AlertSystem.Model.Alert;
import backend.AlertSystem.Model.AlertResult;
import backend.AlertSystem.Repository.AlertRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Service;

import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Configuration
@EnableAsync
public class RequestService {
    private final AlertRepository alertRepository ;
    @Async
    public void sendRequest(Alert alert){
        LocalDateTime localDateTime = LocalDateTime.now();
        alert.setRemainingTime(alert.getControlPeriod());
        try{
            URL url = new URL(alert.getUrl()) ;
            HttpURLConnection con = (HttpURLConnection) url.openConnection() ;
            con.setRequestMethod(alert.getHttpMethod());
            con.connect();
            int status = con.getResponseCode() ;
            if (status == 200){
                AlertResult alertResults = new AlertResult(null,localDateTime,1);
                alert.getAlertResult().add(alertResults);
                System.out.println(alert.getName() + " Connected");
            }
            else {
                AlertResult alertResults = new AlertResult(null,localDateTime,0) ;
                alert.getAlertResult().add(alertResults) ;
                System.out.println(alert.getName() + " Not connected");
            }
        }catch(Exception e){
            AlertResult alertResults = new AlertResult(null,localDateTime,0) ;
            alert.getAlertResult().add(alertResults) ;
        }
        alertRepository.save(alert) ;
       // alert.setRemainingTime(alert.getControlPeriod());

    }

}
