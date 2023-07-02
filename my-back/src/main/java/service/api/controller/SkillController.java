package service.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.api.dao.skill.Skill;
import service.api.dao.skill.SkillDTO;
import service.api.dao.skill.SkillService;

@RestController
@RequestMapping("/skills")
public class SkillController extends EntityController<Skill, SkillDTO> {

    @Autowired
    public SkillController(SkillService skillService) {
        super(skillService);
    }


    //    private final SkillService skillService;
//
//    @GetMapping
//    public List<SkillDTO> getSkills(Pageable pageable) {
//
//        return skillService.findAll();
//    }
//
//    @PostMapping
//    public SkillDTO postSkill(@Valid @RequestBody SkillDTO body) {
//
//        return skillService.save(body);
//    }
//
//    @PostMapping("/all")
//    public List<SkillDTO> postSkills(@Valid @RequestBody List<SkillDTO> body) {
//
//        return skillService.saveAll(body);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteSkill(@PathVariable String id) {
//
//        skillService.delete(id);
//    }
//
//    @DeleteMapping
//    public void deleteAll(@RequestBody List<String> ids) {
//
//        skillService.deleteAll(ids);
//    }
}
