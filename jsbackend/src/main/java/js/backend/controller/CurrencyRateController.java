package js.backend.controller;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/currency")
public class CurrencyRateController {

    private final Random rnd = new Random();

    @GetMapping("/rate/usd")
    public CurrencyDTO getUsdRate() {

        var rateValue = rnd.nextFloat(11150F, 11350F);

        return new CurrencyDTO(rateValue);
    }

    @Data
    @AllArgsConstructor
    class CurrencyDTO {
        private Float rate;
    }
}
