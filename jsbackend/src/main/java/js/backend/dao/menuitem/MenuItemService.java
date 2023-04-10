package js.backend.dao.menuitem;

import java.util.List;

public interface MenuItemService {

    MenuItemDTO save(MenuItemDTO dto);
    MenuItemDTO findById(String id);
    List<MenuItemDTO> findAll();
}
