package service.api.dao.course;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import service.api.service.Entity;

import java.util.Objects;

@Document("courses")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Course implements Entity<CourseDTO> {

    @Id
    private String id;
    private String name;
    private String year;

    @Override
    public CourseDTO toDto() {

        CourseDTO rsl = new CourseDTO();

        rsl.setId(this.getId());
        rsl.setName(this.getName());
        rsl.setYear(this.getYear());

        return rsl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Course course = (Course) o;
        return id.equals(course.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
