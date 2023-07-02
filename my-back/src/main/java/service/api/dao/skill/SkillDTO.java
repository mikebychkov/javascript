package service.api.dao.skill;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import service.api.service.EntityDTO;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SkillDTO implements EntityDTO<Skill> {

    private String id;

    @NotBlank(message = "Skill name not defined")
    private String name;

    private Short percent;

    public static SkillDTO of(Skill skill) {

        if (skill == null) return null;

        SkillDTO rsl = new SkillDTO();

        rsl.setId(skill.getId());
        rsl.setName(skill.getName());
        rsl.setPercent(skill.getPercent());

        return rsl;
    }

    public Skill toEntity() {

        Skill rsl = new Skill();

        rsl.setId(this.getId());
        rsl.setName(this.getName());
        rsl.setPercent(this.getPercent());

        return rsl;
    }
}
