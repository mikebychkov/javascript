package service.api.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Objects;

@Document("skills")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Skill {

    @Id
    private String id;

//    private String username;
//    private String firstName;
//    private String lastName;
//    private String email;
//
//    public String getFullName() {
//
//        return String.format("%s %s",
//                Optional.ofNullable(this.lastName).orElse(""),
//                Optional.ofNullable(this.firstName).orElse("")
//        );
//    }

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
