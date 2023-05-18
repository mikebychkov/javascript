package service.api.dao.experience;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ExperienceRepository extends MongoRepository<Experience, String> {
}