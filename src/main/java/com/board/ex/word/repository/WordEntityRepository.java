package com.board.ex.word.repository;

import com.board.ex.word.entity.WordEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WordEntityRepository extends JpaRepository<WordEntity, String> {

    @Query(value = "select * from words where id = :id", nativeQuery = true)
    List<WordEntity> searchParamRepo(@Param("id") int id);

    List<WordEntity> findByDay(int day);

}
