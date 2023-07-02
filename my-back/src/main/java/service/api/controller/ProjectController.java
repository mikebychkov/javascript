package service.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.api.dao.project.Project;
import service.api.dao.project.ProjectDTO;
import service.api.dao.project.ProjectService;

@RestController
@RequestMapping("/projects")
public class ProjectController extends EntityController<Project, ProjectDTO> {

    @Autowired
    public ProjectController(ProjectService projectService) {
        super(projectService);
    }

    //    private final ProjectService projectService;
//
//    @GetMapping
//    public List<ProjectDTO> getProject(Pageable pageable) {
//
//        return projectService.findAll();
//    }
//
//    @PostMapping
//    public ProjectDTO postProject(@Valid @RequestBody ProjectDTO body) {
//
//        return projectService.save(body);
//    }
//
//    @PostMapping("/all")
//    public List<ProjectDTO> postProjects(@Valid @RequestBody List<ProjectDTO> body) {
//
//        return projectService.saveAll(body);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteProject(@PathVariable String id) {
//
//        projectService.delete(id);
//    }
//
//    @DeleteMapping
//    public void deleteAll(@RequestBody List<String> ids) {
//
//        projectService.deleteAll(ids);
//    }
}
