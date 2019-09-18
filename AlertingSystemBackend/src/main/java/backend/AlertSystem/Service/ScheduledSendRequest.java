package backend.AlertSystem.Service;


import backend.AlertSystem.Model.Alert;
import backend.AlertSystem.Repository.AlertRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
@EnableScheduling
public class ScheduledSendRequest {

    private final AlertRepository alertRepository ;
    private final RequestService requestService ;
    @Scheduled(fixedRate = 1000)
    public void scheduledRequest(){
        List<Alert> alertlist = alertRepository.findAll() ;
        for(Alert alert : alertlist){
            if (alert.getRemainingTime() == 0L){
                requestService.sendRequest(alert);
            }
            else {
                alert.setRemainingTime(alert.getRemainingTime()-1L);
                alertRepository.save(alert) ;

                if (alert.getRemainingTime() == 0L){
                    requestService.sendRequest(alert);
                }
            }

        }
    }

}
