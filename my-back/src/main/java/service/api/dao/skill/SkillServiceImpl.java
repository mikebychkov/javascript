package service.api.dao.skill;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import service.config.exceptionhandling.exceptions.EntityNotFound;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SkillServiceImpl implements SkillService {

    private final SkillRepository skillRepository;

    @Override
    public SkillDTO findById(String id) {

        return skillRepository.findById(id)
                .map(SkillDTO::of)
                .orElseThrow(EntityNotFound::new);
    }

    @Override
    public List<SkillDTO> findByExample(Example<Skill> example) {

        return skillRepository.findAll(example)
                .stream()
                .map(SkillDTO::of)
                .toList();
    }

    @Override
    public Page<SkillDTO> findAll(Pageable pageable) {

        return skillRepository.findAll(pageable)
                .map(SkillDTO::of);
    }

    @Override
    public List<SkillDTO> findAll() {

        return skillRepository.findAll()
                .stream()
                .map(SkillDTO::of)
                .toList();
    }

    @Override
    public SkillDTO save(SkillDTO dto) {

        return Optional.of(skillRepository.save(dto.toEntity()))
                .map(SkillDTO::of)
                .orElseThrow();
    }

    @Override
    public List<SkillDTO> saveAll(List<SkillDTO> dtoList) {

        return skillRepository.saveAll(
                    dtoList.stream()
                            .map(SkillDTO::toEntity)
                            .toList()
                )
                .stream()
                .map(SkillDTO::of)
                .toList();
    }

    @Override
    public void delete(String id) {

        skillRepository.deleteById(id);
    }

    @Override
    public void deleteAll(List<String> ids) {

        skillRepository.deleteAllById(ids);
    }
}
