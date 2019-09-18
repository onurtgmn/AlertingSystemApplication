package backend.AlertSystem.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class AlertResult {
    @Id
    @GeneratedValue
    private Long id ;
    private LocalDateTime requestDate ;
    private Integer requestResult ;

}
