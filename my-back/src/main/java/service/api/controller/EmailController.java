package service.api.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.api.dao.email.EmailDTO;
import service.api.dao.email.EmailService;

@RestController
@RequestMapping("/email")
@RequiredArgsConstructor
@Log4j2
public class EmailController {

    private final EmailService emailService;

    @PostMapping
    public EmailDTO postEmail(@RequestBody EmailDTO body) {

        return emailService.save(body);
    }
}
