package service.api.dao.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.api.service.EntityServiceImpl;

import java.util.List;

@Service
public class ProjectServiceImpl extends EntityServiceImpl<Project, ProjectDTO> implements ProjectService {

    @Autowired
    public ProjectServiceImpl(ProjectRepository projectRepository) {
        super(projectRepository);
    }

    @Override
    public List<ProjectDTO> findAll() {
        return super.findAll().stream().sorted((a,b) -> {
            if (b.getStart().equals(a.getStart())) return 0;
            return b.getStart().isAfter(a.getStart()) ? 1 : -1;
        }).toList();
    }

//    private final ProjectRepository projectRepository;
//
//    @Override
//    public ProjectDTO findById(String id) {
//
//        return projectRepository.findById(id)
//                .map(ProjectDTO::of)
//                .orElseThrow(EntityNotFound::new);
//    }
//
//    @Override
//    public List<ProjectDTO> findByExample(Example<Project> example) {
//
//        return projectRepository.findAll(example)
//                .stream()
//                .map(ProjectDTO::of)
//                .toList();
//    }
//
//    @Override
//    public Page<ProjectDTO> findAll(Pageable pageable) {
//
//        return projectRepository.findAll(pageable)
//                .map(ProjectDTO::of);
//    }
//
//    @Override
//    public List<ProjectDTO> findAll() {
//
//        return projectRepository.findAll()
//                .stream()
//                .map(ProjectDTO::of)
//                .toList();
//    }
//
//    @Override
//    public ProjectDTO save(ProjectDTO dto) {
//
//        return Optional.of(projectRepository.save(dto.toEntity()))
//                .map(ProjectDTO::of)
//                .orElseThrow();
//    }
//
//    @Override
//    public List<ProjectDTO> saveAll(List<ProjectDTO> dtoList) {
//
//        return projectRepository.saveAll(
//                        dtoList.stream()
//                                .map(ProjectDTO::toEntity)
//                                .toList()
//                )
//                .stream()
//                .map(ProjectDTO::of)
//                .toList();
//    }
//
//    @Override
//    public void delete(String id) {
//
//        projectRepository.deleteById(id);
//    }
//
//    @Override
//    public void deleteAll(List<String> ids) {
//
//        projectRepository.deleteAllById(ids);
//    }
}
