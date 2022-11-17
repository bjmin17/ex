package com.board.ex.word.controller;

import com.board.ex.word.entity.WordEntity;
import com.board.ex.word.repository.WordEntityRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/words")
@Slf4j
public class WordController {

    private final WordEntityRepository wordEntityRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @GetMapping("/search")
    public List<WordEntity> searchAllWords() {
        List<WordEntity> wordList = new ArrayList<>();
        wordList = wordEntityRepository.findAll().stream().collect(Collectors.toList());
        return wordList;
    }

    @CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
    @GetMapping("/day")
    public Object searchWordsByDay(@RequestParam(value = "day", defaultValue = "1") int day, HttpServletRequest request, HttpServletResponse response) {
        return wordEntityRepository.findByDay(day);
    }

    @CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
    @PostMapping("/save")
    public Object saveWord(@RequestBody WordEntity word) {
        return wordEntityRepository.save(word);
    }

}
