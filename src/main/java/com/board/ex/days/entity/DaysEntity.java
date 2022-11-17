package com.board.ex.days.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="days")
public class DaysEntity {

    @Id
    @Column(nullable = false, unique = true)
    private int id;

    @Column(nullable = false)
    private int day;

    private String inDate;
}
