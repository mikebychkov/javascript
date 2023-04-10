package js.backend.dao.menuitem;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("menu_item")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuItem {

    @Id
    private String id;
    private String title;
    private String description;
    private Float price;
    private String img;
    private String imgAltDesc;

    public MenuItemDTO toDTO() {
        MenuItemDTO rsl = new MenuItemDTO();
        rsl.setId(this.id);
        rsl.setTitle(this.title);
        rsl.setDescription(this.description);
        rsl.setPrice(this.price);
        rsl.setImg(this.img);
        rsl.setImgAltDesc(this.imgAltDesc);
        return rsl;
    }

    public static MenuItem of(MenuItemDTO dto) {
        MenuItem rsl = new MenuItem();
        rsl.setId(dto.getId());
        rsl.setTitle(dto.getTitle());
        rsl.setDescription(dto.getDescription());
        rsl.setPrice(dto.getPrice());
        rsl.setImg(dto.getImg());
        rsl.setImgAltDesc(dto.getImgAltDesc());
        return rsl;
    }
}
