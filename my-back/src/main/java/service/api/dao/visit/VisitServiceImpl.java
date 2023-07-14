package service.api.dao.visit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.api.service.EntityServiceImpl;

import java.util.List;

@Service
public class VisitServiceImpl extends EntityServiceImpl<Visit, VisitDTO> implements VisitService {

    private final VisitRepository visitRepository;

    @Autowired
    public VisitServiceImpl(VisitRepository visitRepository) {
        super(visitRepository);
        this.visitRepository = visitRepository;
    }

    @Override
    public List<VisitDTO> findAll() {
        return visitRepository.findAllByOrderByDateDesc()
                .stream()
                .map(Visit::toDto)
                .toList();
    }
}
