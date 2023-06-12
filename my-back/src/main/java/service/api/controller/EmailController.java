package service.api.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;
import service.api.dao.email.EmailDTO;
import service.api.dao.email.EmailService;

import java.util.List;

@RestController
@RequestMapping("/email")
@RequiredArgsConstructor
@Log4j2
public class EmailController {

    private final EmailService emailService;

    @GetMapping
    public List<EmailDTO> getAll() {

        return emailService.findAll();
    }

    @PostMapping
    public EmailDTO postEmail(@RequestBody EmailDTO body) {

        return emailService.save(body);
    }
}
