package service.api.controller;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/email")
@RequiredArgsConstructor
@Log4j2
public class EmailController {

//    private final SkillService skillService;

    @PostMapping
    public ResponseEntity<String> postEmail(@RequestBody JsonNode body) {

        log.info("POST EMAIL: {}", body.toString());

        return ResponseEntity.ok("OK");
    }
}
