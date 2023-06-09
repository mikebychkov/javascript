package service.api.dao.skill;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import service.api.service.Entity;

import java.util.Objects;

@Document("skills")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Skill implements Entity<SkillDTO> {

    @Id
    private String id;
    private String name;
    private Short percent;

    @Override
    public SkillDTO toDto() {

        SkillDTO rsl = new SkillDTO();

        rsl.setId(this.getId());
        rsl.setName(this.getName());
        rsl.setPercent(this.getPercent());

        return rsl;    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Skill skill = (Skill) o;
        return id.equals(skill.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
