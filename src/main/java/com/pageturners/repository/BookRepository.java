package com.pageturners.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pageturners.model.Books;

@Repository
public interface BookRepository extends JpaRepository<Books, Integer> {
	
	public List<Books> findByCategoryId(Integer id);
}
