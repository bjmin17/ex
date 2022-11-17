package com.board.ex.days.repository;

import com.board.ex.days.entity.DaysEntity;
import com.board.ex.word.entity.WordEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DaysEntityRepository extends JpaRepository<DaysEntity, String> {


}
