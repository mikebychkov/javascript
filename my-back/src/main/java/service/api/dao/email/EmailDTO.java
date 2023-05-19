package service.api.dao.email;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import service.api.dao.skill.Skill;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class EmailDTO {

    private String id;
    private String address;
    private String message;
    private LocalDate date;
    private String ip;

    public static EmailDTO of(Email email) {

        if (email == null) return null;

        EmailDTO rsl = new EmailDTO();

        rsl.setId(email.getId());
        rsl.setAddress(email.getAddress());
        rsl.setMessage(email.getMessage());
        rsl.setDate(email.getDate());
        rsl.setIp(email.getIp());

        return rsl;
    }

    public Email toEntity() {

        Email rsl = new Email();

        rsl.setId(this.getId());
        rsl.setAddress(this.getAddress());
        rsl.setMessage(this.getMessage());
        rsl.setIp(this.getIp());

        return rsl;
    }
}
