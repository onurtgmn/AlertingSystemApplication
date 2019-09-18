package backend.AlertSystem.Service;

import backend.AlertSystem.Model.MyAllUsers;
import backend.AlertSystem.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {
    private final UserRepository userRepository;

    public MyAllUsers addUser (final MyAllUsers myAllUsers ){
        return userRepository.save(myAllUsers) ;
    }

    public List<MyAllUsers> getUsers(){
        return userRepository.findAll() ;
    }
    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }

}
