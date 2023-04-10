package js.backend.dao.callme;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CallMeRepository extends MongoRepository<CallMe, String> {
}
