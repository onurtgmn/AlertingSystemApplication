package backend.AlertSystem.Controller;

import backend.AlertSystem.Model.Alert;
import backend.AlertSystem.Service.AlertService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")

public class AlertController {

    private final AlertService alertService;

    @PostMapping("/addAlert")
    public Alert addAlert(@RequestBody final Alert alert) {
        return alertService.addAlert(alert);
    }

    @GetMapping("/getAlerts")
    public List<Alert> getAlerts() {
        return alertService.getAlerts();
    }

    @DeleteMapping("/deleteAlert/{id}")
    public void deleteAlert(@PathVariable Long id) {
        alertService.deleteAlert(id);
    }

    @GetMapping("/getAlerts/{id}")
    public Optional<Alert> getAlertById(@PathVariable Long id) {
        return alertService.getAlertById(id);
    }


}
