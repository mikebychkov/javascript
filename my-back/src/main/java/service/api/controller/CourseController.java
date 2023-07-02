package service.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.api.dao.course.Course;
import service.api.dao.course.CourseDTO;
import service.api.dao.course.CourseService;

@RestController
@RequestMapping("/courses")
public class CourseController extends EntityController<Course, CourseDTO> {

    @Autowired
    public CourseController(CourseService courseService) {
        super(courseService);
    }

    //    private final CourseService courseService;
//
//    @GetMapping
//    public List<CourseDTO> getList(Pageable pageable) {
//
//        return courseService.findAll();
//    }
//
//    @PostMapping
//    public CourseDTO post(@Valid @RequestBody CourseDTO body) {
//
//        return courseService.save(body);
//    }
//
//    @PostMapping("/all")
//    public List<CourseDTO> postList(@Valid @RequestBody List<CourseDTO> body) {
//
//        return courseService.saveAll(body);
//    }
//
//    @DeleteMapping("/{id}")
//    public void delete(@PathVariable String id) {
//
//        courseService.delete(id);
//    }
//
//    @DeleteMapping
//    public void deleteAll(@RequestBody List<String> ids) {
//
//        courseService.deleteAll(ids);
//    }
}
