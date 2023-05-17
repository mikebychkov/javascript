package service.api.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import service.api.entity.Skill;

public interface SkillRepository extends MongoRepository<Skill, String> {
}