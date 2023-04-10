package js.backend.dao.menuitem;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuItemDTO {

    private String id;
    private String title;
    private String description;
    private Float price;
    private String img;
    private String imgAltDesc;
}
