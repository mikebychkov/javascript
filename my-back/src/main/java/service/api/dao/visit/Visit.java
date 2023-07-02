package service.api.dao.visit;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import service.api.service.Entity;

import java.time.LocalDateTime;
import java.util.Objects;

@Document("visits")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Visit implements Entity<VisitDTO> {

    @Id
    private String id;
    private String ip;
    private LocalDateTime date = LocalDateTime.now();

    @Override
    public VisitDTO toDto() {

        VisitDTO rsl = new VisitDTO();

        rsl.setId(this.getId());
        rsl.setIp(this.getIp());
        rsl.setDate(this.getDate());

        return rsl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Visit visit = (Visit) o;
        return Objects.equals(id, visit.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
