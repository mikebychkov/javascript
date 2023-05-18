package service.api.dao.experience;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import service.api.dao.project.Project;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ExperienceDTO {

    private String id;
    private LocalDate start;
    private LocalDate end;
    private String position;
    private String organization;
    private String description;

    public static ExperienceDTO of(Experience experience) {

        if (experience == null) return null;

        ExperienceDTO rsl = new ExperienceDTO();

        rsl.setId(experience.getId());
        rsl.setStart(experience.getStart());
        rsl.setEnd(experience.getEnd());
        rsl.setPosition(experience.getPosition());
        rsl.setOrganization(experience.getOrganization());
        rsl.setDescription(experience.getDescription());

        return rsl;
    }

    public Experience toEntity() {

        Experience rsl = new Experience();

        rsl.setId(this.getId());
        rsl.setStart(this.getStart());
        rsl.setEnd(this.getEnd());
        rsl.setPosition(this.getPosition());
        rsl.setOrganization(this.getOrganization());
        rsl.setDescription(this.getDescription());

        return rsl;
    }
}
