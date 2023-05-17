package service.api.controller;

import service.api.dto.SkillDTO;
import service.api.service.entity.SkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/skills")
@RequiredArgsConstructor
public class SkillController {

    private final SkillService skillService;

    @GetMapping
    public Page<SkillDTO> getSkills(Pageable pageable) {

        return skillService.findAll(pageable).map(SkillDTO::of);
    }
}
