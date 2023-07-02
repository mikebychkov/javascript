package service.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.api.dao.visit.Visit;
import service.api.dao.visit.VisitDTO;
import service.api.dao.visit.VisitService;

@RestController
@RequestMapping("/visits")
public class VisitController extends EntityController<Visit, VisitDTO> {

    @Autowired
    public VisitController(VisitService visitService) {
        super(visitService);
    }
}
