package service.api.dao.skill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.api.service.EntityServiceImpl;

@Service
public class SkillServiceImpl extends EntityServiceImpl<Skill, SkillDTO> implements SkillService {

    @Autowired
    public SkillServiceImpl(SkillRepository skillRepository) {
        super(skillRepository);
    }

    //    private final SkillRepository skillRepository;
//
//    @Override
//    public SkillDTO findById(String id) {
//
//        return skillRepository.findById(id)
//                .map(SkillDTO::of)
//                .orElseThrow(EntityNotFound::new);
//    }
//
//    @Override
//    public List<SkillDTO> findByExample(Example<Skill> example) {
//
//        return skillRepository.findAll(example)
//                .stream()
//                .map(SkillDTO::of)
//                .toList();
//    }
//
//    @Override
//    public Page<SkillDTO> findAll(Pageable pageable) {
//
//        return skillRepository.findAll(pageable)
//                .map(SkillDTO::of);
//    }
//
//    @Override
//    public List<SkillDTO> findAll() {
//
//        return skillRepository.findAll()
//                .stream()
//                .map(SkillDTO::of)
//                .toList();
//    }
//
//    @Override
//    public SkillDTO save(SkillDTO dto) {
//
//        return Optional.of(skillRepository.save(dto.toEntity()))
//                .map(SkillDTO::of)
//                .orElseThrow();
//    }
//
//    @Override
//    public List<SkillDTO> saveAll(List<SkillDTO> dtoList) {
//
//        return skillRepository.saveAll(
//                    dtoList.stream()
//                            .map(SkillDTO::toEntity)
//                            .toList()
//                )
//                .stream()
//                .map(SkillDTO::of)
//                .toList();
//    }
//
//    @Override
//    public void delete(String id) {
//
//        skillRepository.deleteById(id);
//    }
//
//    @Override
//    public void deleteAll(List<String> ids) {
//
//        skillRepository.deleteAllById(ids);
//    }
}
