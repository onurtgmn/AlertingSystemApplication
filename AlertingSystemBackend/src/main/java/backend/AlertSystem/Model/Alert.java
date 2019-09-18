package backend.AlertSystem.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Alert {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String url;
    private String httpMethod;
    private Long controlPeriod;
    private Long remainingTime = 0L;
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "result_id")
    private Set<AlertResult> AlertResult;
}
