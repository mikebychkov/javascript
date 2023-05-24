package service.api.dao.email;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface EmailRepository extends MongoRepository<EmailCard, String> {

    @Query("{ 'ip': ?0 , 'date': ?1 }")
    List<EmailCard> findEmailsByIP(String ip, LocalDate date);
}