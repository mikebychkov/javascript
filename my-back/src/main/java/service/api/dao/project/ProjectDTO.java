package service.api.dao.project;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import service.api.service.EntityDTO;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProjectDTO implements EntityDTO<Project> {

    private String id;

    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate start;

    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate end;

    private String industry;
    private String description;
    private String role;
    private String technologies;
    private List<String> responsibilities; // TODO: ADD DESERIALIZER <FROM STRING>

    public static ProjectDTO of(Project project) {

        if (project == null) return null;

        ProjectDTO rsl = new ProjectDTO();

        rsl.setId(project.getId());
        rsl.setStart(project.getStart());
        rsl.setEnd(project.getEnd());
        rsl.setIndustry(project.getIndustry());
        rsl.setDescription(project.getDescription());
        rsl.setRole(project.getRole());
        rsl.setTechnologies(project.getTechnologies());
        rsl.setResponsibilities(project.getResponsibilities());

        return rsl;
    }

    public Project toEntity() {

        Project rsl = new Project();

        rsl.setId(this.getId());
        rsl.setStart(this.getStart());
        rsl.setEnd(this.getEnd());
        rsl.setIndustry(this.getIndustry());
        rsl.setDescription(this.getDescription());
        rsl.setRole(this.getRole());
        rsl.setTechnologies(this.getTechnologies());
        rsl.setResponsibilities(this.getResponsibilities());

        return rsl;
    }
}
