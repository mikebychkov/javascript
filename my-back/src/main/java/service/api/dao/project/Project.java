package service.api.dao.project;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Document("projects")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Project {

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
