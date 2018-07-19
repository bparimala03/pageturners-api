package com.pageturners.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pageturners.model.Categories;
import com.pageturners.service.CategoryService;

@CrossOrigin
@RestController
public class CategoryController {
	
	@Autowired
	CategoryService categoryService;
	
	@RequestMapping(value = "/categories")
	public List<Categories> getCategories() {
		return categoryService.getCategories();
	}
	
	@RequestMapping(value = "/categories/{id}")
	public Categories getCategory(@PathVariable Integer id) {
		return categoryService.getCategoryById(id);
	}
}
