package service.api.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import service.api.dao.skill.SkillDTO;
import service.api.dao.skill.SkillService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/skills")
@RequiredArgsConstructor
public class SkillController {

    private final SkillService skillService;

    @GetMapping
    public List<SkillDTO> getSkills(Pageable pageable) {

        return skillService.findAll();
    }

    @PostMapping
    public SkillDTO postSkill(@Valid @RequestBody SkillDTO body) {

        return skillService.save(body);
    }

    @PostMapping("/all")
    public List<SkillDTO> postSkills(@Valid @RequestBody List<SkillDTO> body) {

        return skillService.saveAll(body);
    }

    @DeleteMapping("/{id}")
    public void deleteSkill(@PathVariable String id) {

        skillService.delete(id);
    }

    @DeleteMapping
    public void deleteAll(@RequestBody List<String> ids) {

        skillService.deleteAll(ids);
    }
}
