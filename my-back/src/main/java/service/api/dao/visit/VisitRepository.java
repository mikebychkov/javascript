package service.api.dao.visit;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface VisitRepository extends MongoRepository<Visit, String> {

    List<Visit> findAllByOrderByDateDesc();
}
