package service.api.dao.project;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import service.api.service.Entity;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Document("projects")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Project implements Entity<ProjectDTO> {

    @Id
    private String id;
    private LocalDate start;
    private LocalDate end;
    private String industry;
    private String description;
    private String role;
    private String technologies;
    private List<String> responsibilities;

    @Override
    public ProjectDTO toDto() {

        ProjectDTO rsl = new ProjectDTO();

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Project skill = (Project) o;
        return id.equals(skill.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
