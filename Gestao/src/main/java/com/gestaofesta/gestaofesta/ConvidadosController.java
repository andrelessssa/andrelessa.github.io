package com.gestaofesta.gestaofesta;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ConvidadosController {

    @GetMapping("/convidado")
    public String lista() {
        return null;

    }
}
