package service.api.dao.experience;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import service.api.service.Entity;

import java.time.LocalDate;
import java.util.Objects;

@Document("experience")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Experience implements Entity<ExperienceDTO> {

    @Id
    private String id;
    private LocalDate start;
    private LocalDate end;
    private String position;
    private String organization;
    private String description;

    @Override
    public ExperienceDTO toDto() {

        ExperienceDTO rsl = new ExperienceDTO();

        rsl.setId(this.getId());
        rsl.setStart(this.getStart());
        rsl.setEnd(this.getEnd());
        rsl.setPosition(this.getPosition());
        rsl.setOrganization(this.getOrganization());
        rsl.setDescription(this.getDescription());

        return rsl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Experience skill = (Experience) o;
        return id.equals(skill.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
