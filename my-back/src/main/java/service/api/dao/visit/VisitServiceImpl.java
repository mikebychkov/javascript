package service.api.dao.visit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.api.service.EntityServiceImpl;

@Service
public class VisitServiceImpl extends EntityServiceImpl<Visit, VisitDTO> implements VisitService {

    @Autowired
    public VisitServiceImpl(VisitRepository visitRepository) {
        super(visitRepository);
    }
}
