package service.api.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import service.api.dao.project.ProjectDTO;
import service.api.dao.project.ProjectService;

import java.util.List;

@RestController
@RequestMapping("/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    public List<ProjectDTO> getProject(Pageable pageable) {

        return projectService.findAll();
    }

    @PostMapping
    public ProjectDTO postProject(@RequestBody ProjectDTO body) {

        return projectService.save(body);
    }

    @PostMapping("/all")
    public List<ProjectDTO> postProjects(@RequestBody List<ProjectDTO> body) {

        return projectService.saveAll(body);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable String id) {

        projectService.delete(id);
    }
}
