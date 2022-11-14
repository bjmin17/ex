package com.board.ex.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class MainPageController {

    @RequestMapping({"/","/main"})
    public String main(HttpServletRequest request) {
        return "/main/index";
    }

    @RequestMapping({"/reactEx"})
    public String reactEx(HttpServletRequest request) {
        return "/main/index";
    }

    @RequestMapping("/dashboard")
    public String dashboard(HttpServletRequest request) {
        return "/dashboard/dashboard";
    }
}
