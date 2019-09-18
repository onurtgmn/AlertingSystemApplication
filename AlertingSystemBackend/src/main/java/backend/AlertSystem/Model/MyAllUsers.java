package backend.AlertSystem.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class MyAllUsers {
    @Id
    @GeneratedValue

    private Long id ;
    private String username;
    private String password ;
    private String email ;
}
