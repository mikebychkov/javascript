package service.api.dao.course;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CourseDTO {

    private String id;

    @NotBlank(message = "Course name not defined")
    private String name;
    private String year;

    public static CourseDTO of(Course course) {

        if (course == null) return null;

        CourseDTO rsl = new CourseDTO();

        rsl.setId(course.getId());
        rsl.setName(course.getName());
        rsl.setYear(course.getYear());

        return rsl;
    }

    public Course toEntity() {

        Course rsl = new Course();

        rsl.setId(this.getId());
        rsl.setName(this.getName());
        rsl.setYear(this.getYear());

        return rsl;
    }
}
