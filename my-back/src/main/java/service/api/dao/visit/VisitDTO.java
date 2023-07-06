package service.api.dao.visit;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import service.api.service.EntityDTO;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class VisitDTO implements EntityDTO<Visit> {

    private String id;

    @NotBlank(message = "IP not defined")
    private String ip;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime date;

    public static VisitDTO of(Visit entity) {

        VisitDTO rsl = new VisitDTO();

        rsl.setId(entity.getId());
        rsl.setIp(entity.getIp());
        rsl.setDate(entity.getDate());

        return rsl;
    }

    public Visit toEntity() {

        Visit rsl = new Visit();

        rsl.setId(this.getId());
        rsl.setIp(this.getIp());

        return rsl;
    }
}
