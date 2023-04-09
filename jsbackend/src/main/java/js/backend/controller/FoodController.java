package js.backend.controller;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/food")
@Log4j2
public class FoodController {

    @PostMapping("/contact-us")
    public ResponseEntity<Void> contactUs(@RequestBody JsonNode body) {

        log.info("CONTACT US REQUEST: {}", body);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/call-me")
    public ResponseEntity<Void> callMe(@RequestBody JsonNode body) {

        log.info("CALL ME REQUEST: {}", body);

        return ResponseEntity.ok().build();
    }
}
