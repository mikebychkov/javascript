package service.api.dao.email;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import service.api.service.Entity;

import java.time.LocalDate;
import java.util.Objects;

@Document("emails")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmailCard implements Entity<EmailDTO> {

    @Id
    private String id;
    private String address;
    private String message;
    private LocalDate date = LocalDate.now();
    private String ip;

    @Override
    public EmailDTO toDto() {

        EmailDTO rsl = new EmailDTO();

        rsl.setId(this.getId());
        rsl.setAddress(this.getAddress());
        rsl.setMessage(this.getMessage());
        rsl.setDate(this.getDate());
        rsl.setIp(this.getIp());

        return rsl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmailCard emailCard = (EmailCard) o;
        return Objects.equals(id, emailCard.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
