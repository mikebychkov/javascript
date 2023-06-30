package service.api.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;
import service.api.dao.email.EmailDTO;
import service.api.dao.email.EmailService;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
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
    public EmailDTO postEmail(@Valid @RequestBody EmailDTO body, HttpServletRequest request) {

        String headerIp = request.getHeader("X-Forwarded-For");

        log.info("IP BY FRONT: {}, IP BY HEADER: {}", body.getIp(), headerIp);

        if (body.getIp() == null || body.getIp().contains("error")) {
            if (headerIp != null) {
                body.setIp(headerIp);
            }
        }

        return emailService.save(body);
    }

    @DeleteMapping("/{id}")
    public void deleteEmails(@PathVariable String id) {

        emailService.delete(id);
    }

    @DeleteMapping
    public void deleteAll(@RequestBody List<String> ids) {

        emailService.deleteAll(ids);
    }
}
