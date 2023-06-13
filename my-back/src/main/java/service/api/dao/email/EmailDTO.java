package service.api.dao.email;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class EmailDTO {

    private String id;

    @Email(message = "Must be a valid email address")
    private String address;

    @Size(min = 100, message = "Must be at least 100 chars")
    @Size(max = 1000, message = "Must not be greater than 1000 chars")
    private String message;

    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate date;

    @NotBlank(message = "IP address not defined")
    private String ip;

    public static EmailDTO of(EmailCard emailCard) {

        if (emailCard == null) return null;

        EmailDTO rsl = new EmailDTO();

        rsl.setId(emailCard.getId());
        rsl.setAddress(emailCard.getAddress());
        rsl.setMessage(emailCard.getMessage());
        rsl.setDate(emailCard.getDate());
        rsl.setIp(emailCard.getIp());

        return rsl;
    }

    public EmailCard toEntity() {

        EmailCard rsl = new EmailCard();

        rsl.setId(this.getId());
        rsl.setAddress(this.getAddress());
        rsl.setMessage(this.getMessage());
        rsl.setIp(this.getIp());

        return rsl;
    }
}
