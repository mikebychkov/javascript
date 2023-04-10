package js.backend.dao.callme;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CallMeDTO {

    private String id;
    private String name;
    private String phone;
}
