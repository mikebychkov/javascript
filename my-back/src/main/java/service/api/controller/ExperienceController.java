package service.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.api.dao.experience.Experience;
import service.api.dao.experience.ExperienceDTO;
import service.api.dao.experience.ExperienceService;

@RestController
@RequestMapping("/experience")
public class ExperienceController extends EntityController<Experience, ExperienceDTO> {

    @Autowired
    public ExperienceController(ExperienceService experienceService) {
        super(experienceService);
    }

    //    private final ExperienceService experienceService;
//
//    @GetMapping
//    public List<ExperienceDTO> getExperience(Pageable pageable) {
//
//        return experienceService.findAll();
//    }
//
//    @PostMapping
//    public ExperienceDTO postExperience(@Valid @RequestBody ExperienceDTO body) {
//
//        return experienceService.save(body);
//    }
//
//    @PostMapping("/all")
//    public List<ExperienceDTO> postExperience(@Valid @RequestBody List<ExperienceDTO> body) {
//
//        return experienceService.saveAll(body);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteExperience(@PathVariable String id) {
//
//        experienceService.delete(id);
//    }
//
//    @DeleteMapping
//    public void deleteAll(@RequestBody List<String> ids) {
//
//        experienceService.deleteAll(ids);
//    }
}
