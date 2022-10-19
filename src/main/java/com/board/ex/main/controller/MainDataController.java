package com.board.ex.main.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainDataController {

    @GetMapping("/api/hello")
    public String test() {
        return "hello";
    }
}
