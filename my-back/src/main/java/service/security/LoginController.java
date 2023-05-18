package service.security;

import lombok.extern.log4j.Log4j2;
import service.security.service.JwtService;
import service.security.user.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Log4j2
public class LoginController {

    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDTO credentials) {

        log.info(credentials);

        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                                                            credentials.getUsername(),
                                                            credentials.getPassword()
                                                        );

        Authentication auth = authenticationManager.authenticate(token);

        String jwtToken = jwtService.generateToken(auth.getName());

        return ResponseEntity.ok()
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + jwtToken)
                .header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, "Authorization")
                .body(new TokenDTO(jwtToken));
    }

    @Data
    @AllArgsConstructor
    static class TokenDTO {
        String token;
    }
}