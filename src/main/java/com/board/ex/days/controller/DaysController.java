package com.board.ex.days.controller;

import com.board.ex.days.entity.DaysEntity;
import com.board.ex.days.repository.DaysEntityRepository;
import com.board.ex.days.service.DaysService;
import com.board.ex.word.repository.WordEntityRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/days")
@Slf4j
public class DaysController {

    private final DaysEntityRepository daysEntityRepository;
    private final DaysService daysService;

    @PersistenceContext
    private EntityManager entityManager;

    @GetMapping("/list")
    public Object searchAllWords() {
        List<DaysEntity> days = daysService.findAll();
        return days;
    }

}
