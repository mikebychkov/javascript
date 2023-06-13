package service.api.dao.course;

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
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;

    @Override
    public CourseDTO findById(String id) {

        return courseRepository.findById(id)
                .map(CourseDTO::of)
                .orElseThrow(EntityNotFound::new);
    }

    @Override
    public List<CourseDTO> findByExample(Example<Course> example) {

        return courseRepository.findAll(example)
                .stream()
                .map(CourseDTO::of)
                .toList();
    }

    @Override
    public Page<CourseDTO> findAll(Pageable pageable) {

        return courseRepository.findAll(pageable)
                .map(CourseDTO::of);
    }

    @Override
    public List<CourseDTO> findAll() {

        return courseRepository.findAll()
                .stream()
                .map(CourseDTO::of)
                .toList();
    }

    @Override
    public CourseDTO save(CourseDTO dto) {

        return Optional.of(courseRepository.save(dto.toEntity()))
                .map(CourseDTO::of)
                .orElseThrow();
    }

    @Override
    public List<CourseDTO> saveAll(List<CourseDTO> dtoList) {

        return courseRepository.saveAll(
                    dtoList.stream()
                            .map(CourseDTO::toEntity)
                            .toList()
                )
                .stream()
                .map(CourseDTO::of)
                .toList();
    }

    @Override
    public void delete(String id) {

        courseRepository.deleteById(id);
    }

    @Override
    public void deleteAll(List<String> ids) {

        courseRepository.deleteAllById(ids);
    }
}
