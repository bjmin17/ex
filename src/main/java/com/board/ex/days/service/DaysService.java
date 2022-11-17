package com.board.ex.days.service;

import com.board.ex.days.entity.DaysEntity;
import com.board.ex.days.repository.DaysEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DaysService {

    @Autowired
    private DaysEntityRepository daysEntityRepository;

    public List<DaysEntity> findAll() {
        List<DaysEntity> days = new ArrayList<>();
        days.addAll(daysEntityRepository.findAll());
        return days;
    }
}
