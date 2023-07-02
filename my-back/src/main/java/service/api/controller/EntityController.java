package service.api.controller;

import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import service.api.dao.course.CourseDTO;
import service.api.dao.course.CourseService;
import service.api.service.EntityService;

import javax.validation.Valid;
import java.util.List;

public class EntityController<T, D> {

    private final EntityService<T, D> entityService;

    public EntityController(EntityService<T, D> entityService) {
        this.entityService = entityService;
    }

    @GetMapping
    public List<D> getList(Pageable pageable) {

        return entityService.findAll();
    }

    @PostMapping
    public D post(@Valid @RequestBody D body) {

        return entityService.save(body);
    }

    @PostMapping("/all")
    public List<D> postList(@Valid @RequestBody List<D> body) {

        return entityService.saveAll(body);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {

        entityService.delete(id);
    }

    @DeleteMapping
    public void deleteAll(@RequestBody List<String> ids) {

        entityService.deleteAll(ids);
    }
}
