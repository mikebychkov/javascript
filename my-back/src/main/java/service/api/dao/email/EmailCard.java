package service.api.dao.email;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document("emails")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmailCard {

    @Id
    private String id;
    private String address;
    private String message;
    private LocalDate date = LocalDate.now();
    private String ip;
}
