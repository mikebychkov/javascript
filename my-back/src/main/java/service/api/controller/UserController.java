package service.api.controller;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.apache.commons.lang3.NotImplementedException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.security.user.User;
import service.security.user.UserDTO;
import service.security.user.UserService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Log4j2
public class UserController {

    private final UserService userService;

    @GetMapping
    public List<UserDTO> getUsers() {

        return userService.findAll()
                .stream()
                .map(UserDTO::of)
                .toList();
    }

    @PostMapping
    public UserDTO postUser(@Valid @RequestBody UserDTO body) {

        return userService.save(body);
    }

    @DeleteMapping
    public void deleteUser() {

        throw new NotImplementedException("Method not implemented");
    }

    @PostMapping("/init-admin")
    public ResponseEntity<Void> initAdmin(@RequestBody JsonNode body) {

        String password = body.get("password").textValue();

        User initAdmin = User.builder()
                .username("admin")
                .email("admin@admin.com")
                .password(password)
                .roles("ROLE_ADMIN,ROLE_USER")
                .build();

        userService.save(initAdmin);

        return ResponseEntity.ok().build();
    }
}
