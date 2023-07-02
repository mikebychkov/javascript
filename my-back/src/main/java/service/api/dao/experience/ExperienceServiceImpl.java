package service.api.dao.experience;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.api.service.EntityServiceImpl;

@Service
public class ExperienceServiceImpl extends EntityServiceImpl<Experience, ExperienceDTO> implements ExperienceService {

    @Autowired
    public ExperienceServiceImpl(ExperienceRepository experienceRepository) {
        super(experienceRepository);
    }

    //    private final ExperienceRepository experienceRepository;
//
//    @Override
//    public ExperienceDTO findById(String id) {
//
//        return experienceRepository.findById(id)
//                .map(ExperienceDTO::of)
//                .orElseThrow(EntityNotFound::new);
//    }
//
//    @Override
//    public List<ExperienceDTO> findByExample(Example<Experience> example) {
//
//        return experienceRepository.findAll(example)
//                .stream()
//                .map(ExperienceDTO::of)
//                .toList();
//    }
//
//    @Override
//    public Page<ExperienceDTO> findAll(Pageable pageable) {
//
//        return experienceRepository.findAll(pageable)
//                .map(ExperienceDTO::of);
//    }
//
//    @Override
//    public List<ExperienceDTO> findAll() {
//
//        return experienceRepository.findAll()
//                .stream()
//                .map(ExperienceDTO::of)
//                .toList();
//    }
//
//    @Override
//    public ExperienceDTO save(ExperienceDTO dto) {
//
//        return Optional.of(experienceRepository.save(dto.toEntity()))
//                .map(ExperienceDTO::of)
//                .orElseThrow();
//    }
//
//    @Override
//    public List<ExperienceDTO> saveAll(List<ExperienceDTO> dtoList) {
//
//        return experienceRepository.saveAll(
//                        dtoList.stream()
//                                .map(ExperienceDTO::toEntity)
//                                .toList()
//                )
//                .stream()
//                .map(ExperienceDTO::of)
//                .toList();
//    }
//
//    @Override
//    public void delete(String id) {
//
//        experienceRepository.deleteById(id);
//    }
//
//    @Override
//    public void deleteAll(List<String> ids) {
//
//        experienceRepository.deleteAllById(ids);
//    }
}
