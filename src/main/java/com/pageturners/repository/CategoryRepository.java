package com.pageturners.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pageturners.model.Categories;

@Repository
public interface CategoryRepository extends JpaRepository<Categories, Integer> {

}
