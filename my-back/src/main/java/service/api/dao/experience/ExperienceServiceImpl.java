package service.api.dao.experience;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import service.api.dao.skill.SkillDTO;
import service.config.exceptionhandling.exceptions.EntityNotFound;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ExperienceServiceImpl implements ExperienceService {

    private final ExperienceRepository experienceRepository;

    @Override
    public ExperienceDTO findById(String id) {

        return experienceRepository.findById(id)
                .map(ExperienceDTO::of)
                .orElseThrow(EntityNotFound::new);
    }

    @Override
    public List<ExperienceDTO> findByExample(Example<Experience> example) {

        return experienceRepository.findAll(example)
                .stream()
                .map(ExperienceDTO::of)
                .toList();
    }

    @Override
    public Page<ExperienceDTO> findAll(Pageable pageable) {

        return experienceRepository.findAll(pageable)
                .map(ExperienceDTO::of);
    }

    @Override
    public List<ExperienceDTO> findAll() {

        return experienceRepository.findAll()
                .stream()
                .map(ExperienceDTO::of)
                .toList();
    }

    @Override
    public ExperienceDTO save(ExperienceDTO dto) {

        return Optional.of(experienceRepository.save(dto.toEntity()))
                .map(ExperienceDTO::of)
                .orElseThrow();
    }

    @Override
    public List<ExperienceDTO> saveAll(List<ExperienceDTO> dtoList) {

        return experienceRepository.saveAll(
                        dtoList.stream()
                                .map(ExperienceDTO::toEntity)
                                .toList()
                )
                .stream()
                .map(ExperienceDTO::of)
                .toList();
    }

    @Override
    public void delete(String id) {

        experienceRepository.deleteById(id);
    }
}
