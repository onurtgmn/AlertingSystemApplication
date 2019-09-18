package backend.AlertSystem.Controller;

import backend.AlertSystem.Model.MyAllUsers;
import backend.AlertSystem.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {
    private final UserService userService ;

    @PostMapping("/addUser")
    public MyAllUsers addUser(@RequestBody final MyAllUsers myAllUsers){
        return userService.addUser(myAllUsers) ;
    }
    @GetMapping("/getUsers")
    public List<MyAllUsers> getUsers(){
        return userService.getUsers() ;
    }
    @DeleteMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }
}
