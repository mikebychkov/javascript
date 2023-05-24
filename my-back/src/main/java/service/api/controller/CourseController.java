package service.api.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import service.api.dao.course.CourseDTO;
import service.api.dao.course.CourseService;
import service.api.dao.skill.SkillDTO;
import service.api.dao.skill.SkillService;

import java.util.List;

@RestController
@RequestMapping("/courses")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @GetMapping
    public List<CourseDTO> getList(Pageable pageable) {

        return courseService.findAll();
    }

    @PostMapping
    public CourseDTO post(@RequestBody CourseDTO body) {

        return courseService.save(body);
    }

    @PostMapping("/all")
    public List<CourseDTO> postList(@RequestBody List<CourseDTO> body) {

        return courseService.saveAll(body);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {

        courseService.delete(id);
    }
}
