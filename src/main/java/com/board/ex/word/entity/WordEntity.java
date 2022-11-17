package com.board.ex.word.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="words")
@Data
public class WordEntity {

    @Id
    @Column(nullable = false, unique = true)
    private int id;

    @Column(nullable = false)
    private int day;

    @Column(nullable = false)
    private String eng;

    @Column(nullable = false)
    private String kor;

    private boolean isDone;

    private String inDate;
}
