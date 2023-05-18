package service.api.dao.project;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProjectDTO {

    private String id;
    private LocalDate start;
    private LocalDate end;
    private String position;
    private String organization;
    private String description;

    public static ProjectDTO of(Project project) {

        if (project == null) return null;

        ProjectDTO rsl = new ProjectDTO();

        rsl.setId(project.getId());
        rsl.setStart(project.getStart());
        rsl.setEnd(project.getEnd());
        rsl.setPosition(project.getPosition());
        rsl.setOrganization(project.getOrganization());
        rsl.setDescription(project.getDescription());

        return rsl;
    }

    public Project toEntity() {

        Project rsl = new Project();

        rsl.setId(this.getId());
        rsl.setStart(this.getStart());
        rsl.setEnd(this.getEnd());
        rsl.setPosition(this.getPosition());
        rsl.setOrganization(this.getOrganization());
        rsl.setDescription(this.getDescription());

        return rsl;
    }
}
