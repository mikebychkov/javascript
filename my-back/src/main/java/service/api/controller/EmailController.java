package service.api.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import service.api.dao.email.EmailCard;
import service.api.dao.email.EmailDTO;
import service.api.dao.email.EmailService;
import service.api.service.EntityService;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/email")
//@RequiredArgsConstructor
@Log4j2
public class EmailController extends EntityController<EmailCard, EmailDTO> {

    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        super(emailService);
        this.emailService = emailService;
    }

//    @GetMapping
//    public List<EmailDTO> getAll() {
//
//        return emailService.findAll();
//    }

    @PostMapping
    @Override
    public EmailDTO post(@Valid @RequestBody EmailDTO body) {

        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();

        String headerIp = request.getHeader("X-Forwarded-For");

        log.info("IP BY FRONT: {}, IP BY HEADER: {}", body.getIp(), headerIp);

        if (body.getIp() == null || body.getIp().contains("error")) {
            if (headerIp != null) {
                body.setIp(headerIp);
            }
        }

        return emailService.save(body);
    }

//    @DeleteMapping("/{id}")
//    public void deleteEmails(@PathVariable String id) {
//
//        emailService.delete(id);
//    }
//
//    @DeleteMapping
//    public void deleteAll(@RequestBody List<String> ids) {
//
//        emailService.deleteAll(ids);
//    }
}
