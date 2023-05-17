package service.api.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import service.api.entity.Skill;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SkillDTO {

    private String id;
//    private String username;
//    private String firstName;
//    private String lastName;

    public static SkillDTO of(Skill skill) {

        if (skill == null) return null;

        SkillDTO rsl = new SkillDTO();

        rsl.setId(skill.getId());
//        rsl.setUsername(skill.getUsername());
//        rsl.setFirstName(skill.getFirstName());
//        rsl.setLastName(skill.getLastName());

        return rsl;
    }
}
