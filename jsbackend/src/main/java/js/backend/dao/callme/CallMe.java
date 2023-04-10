package js.backend.dao.callme;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("call_me")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CallMe {

    @Id
    private String id;
    private String name;
    private String phone;

    public CallMeDTO toDTO() {
        CallMeDTO rsl = new CallMeDTO(this.id, this.name, this.phone);
        return rsl;
    }

    public static CallMe of(CallMeDTO dto) {
        CallMe rsl = new CallMe(dto.getId(), dto.getName(), dto.getPhone());
        return rsl;
    }
}
