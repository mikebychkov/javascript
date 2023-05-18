package service.api.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import service.api.dao.experience.ExperienceDTO;
import service.api.dao.experience.ExperienceService;

import java.util.List;

@RestController
@RequestMapping("/experience")
@RequiredArgsConstructor
public class ExperienceController {

    private final ExperienceService experienceService;

    @GetMapping
    public List<ExperienceDTO> getExperience(Pageable pageable) {

        return experienceService.findAll();
    }

    @PostMapping
    public ExperienceDTO postExperience(@RequestBody ExperienceDTO body) {

        return experienceService.save(body);
    }

    @PostMapping("/all")
    public List<ExperienceDTO> postExperience(@RequestBody List<ExperienceDTO> body) {

        return experienceService.saveAll(body);
    }

    @DeleteMapping("/{id}")
    public void deleteExperience(@PathVariable String id) {

        experienceService.delete(id);
    }
}
