package service.api.dao.experience;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import java.time.LocalDate;
import java.util.Objects;

@Document("experience")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Experience {

    @Id
    private String id;
    private LocalDate start;
    private LocalDate end;
    private String position;
    private String organization;
    private String description;

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
