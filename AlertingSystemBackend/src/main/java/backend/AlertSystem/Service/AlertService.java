package backend.AlertSystem.Service;

import backend.AlertSystem.Model.Alert;
import backend.AlertSystem.Repository.AlertRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AlertService {
    private final AlertRepository alertRepository;
    public Alert addAlert(final Alert alert) {
        return alertRepository.save(alert);
    }
    public List<Alert> getAlerts() {
        return alertRepository.findAll();
    }
    public void deleteAlert(Long id) {
        alertRepository.deleteById(id);
    }
    public Optional<Alert> getAlertById(Long id) {
        return alertRepository.findById(id);
    }
}
