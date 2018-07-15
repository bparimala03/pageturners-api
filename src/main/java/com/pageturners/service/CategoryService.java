package com.pageturners.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pageturners.model.Categories;
import com.pageturners.repository.CategoryRepository;

@Service
public class CategoryService {
	
	@Autowired
	CategoryRepository categoryRespository;

	public List<Categories> getCategories() {
		List<Categories> categories = StreamSupport.stream(categoryRespository.findAll().spliterator(), false)
				.collect(Collectors.toList());
		return categories;
	}

	public Categories getCategoryById(Integer id) {
		return categoryRespository.findById(id).get();
	}
}
