package service.api.dao.project;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import service.api.dao.experience.ExperienceDTO;
import service.config.exceptionhandling.exceptions.EntityNotFound;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;

    @Override
    public ProjectDTO findById(String id) {

        return projectRepository.findById(id)
                .map(ProjectDTO::of)
                .orElseThrow(EntityNotFound::new);
    }

    @Override
    public List<ProjectDTO> findByExample(Example<Project> example) {

        return projectRepository.findAll(example)
                .stream()
                .map(ProjectDTO::of)
                .toList();
    }

    @Override
    public Page<ProjectDTO> findAll(Pageable pageable) {

        return projectRepository.findAll(pageable)
                .map(ProjectDTO::of);
    }

    @Override
    public List<ProjectDTO> findAll() {

        return projectRepository.findAll()
                .stream()
                .map(ProjectDTO::of)
                .toList();
    }

    @Override
    public ProjectDTO save(ProjectDTO dto) {

        return Optional.of(projectRepository.save(dto.toEntity()))
                .map(ProjectDTO::of)
                .orElseThrow();
    }

    @Override
    public List<ProjectDTO> saveAll(List<ProjectDTO> dtoList) {
        return projectRepository.saveAll(
                        dtoList.stream()
                                .map(ProjectDTO::toEntity)
                                .toList()
                )
                .stream()
                .map(ProjectDTO::of)
                .toList();
    }

    @Override
    public void delete(String id) {

        projectRepository.deleteById(id);
    }
}
