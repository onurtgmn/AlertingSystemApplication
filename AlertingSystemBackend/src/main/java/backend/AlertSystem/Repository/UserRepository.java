package backend.AlertSystem.Repository;

import backend.AlertSystem.Model.MyAllUsers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<MyAllUsers,Long> {
}
