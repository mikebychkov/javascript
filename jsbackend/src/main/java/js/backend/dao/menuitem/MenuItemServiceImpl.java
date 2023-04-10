package js.backend.dao.menuitem;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MenuItemServiceImpl implements MenuItemService {

    private final MenuItemRepository menuItemRepository;

    @Override
    public MenuItemDTO save(MenuItemDTO dto) {

        MenuItem menuItem = MenuItem.of(dto);
        return menuItemRepository.save(menuItem).toDTO();
    }

    @Override
    public MenuItemDTO findById(String id) {

        return menuItemRepository.findById(id)
                .map(MenuItem::toDTO)
                .orElseThrow();
    }

    @Override
    public List<MenuItemDTO> findAll() {
        return menuItemRepository.findAll()
                .stream()
                .map(MenuItem::toDTO)
                .toList();
    }
}
