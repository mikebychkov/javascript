package service.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import service.api.dao.visit.Visit;
import service.api.dao.visit.VisitDTO;
import service.api.dao.visit.VisitService;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/visits")
public class VisitController extends EntityController<Visit, VisitDTO> {

    @Autowired
    public VisitController(VisitService visitService) {
        super(visitService);
    }

    @PostMapping
    @Override
    public VisitDTO post(VisitDTO body) {

        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();

        String headerIp = request.getHeader("X-Forwarded-For");

        if (body.getIp() == null || body.getIp().contains("error")) {
            if (headerIp != null) {
                body.setIp(headerIp);
            }
        }
        return super.post(body);
    }
}
