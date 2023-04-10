package js.backend.controller;

import js.backend.dao.callme.CallMeDTO;
import js.backend.dao.callme.CallMeService;
import js.backend.dao.menuitem.MenuItemDTO;
import js.backend.dao.menuitem.MenuItemService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/food")
@RequiredArgsConstructor
@Log4j2
public class FoodController {

    private final CallMeService callMeService;
    private final MenuItemService menuItemService;

    @PostMapping("/call-me")
    public ResponseEntity<CallMeDTO> postCallMe(@RequestBody CallMeDTO body) {

        log.info("CALL ME REQUEST: {} {}", body, LocalDateTime.now());
        return ResponseEntity.ok(callMeService.save(body));
    }

    @GetMapping("/menu")
    public ResponseEntity<List<MenuItemDTO>> getMenuAll() {

        log.info("GET MENU ALL REQUEST: {}", LocalDateTime.now());
        return ResponseEntity.ok(menuItemService.findAll());
    }

    @PostMapping("/menu")
    public ResponseEntity<MenuItemDTO> postMenuItem(@RequestBody MenuItemDTO body) {

        log.info("POST MENU ALL REQUEST: {} {}", body, LocalDateTime.now());
        return ResponseEntity.ok(menuItemService.save(body));
    }
}
