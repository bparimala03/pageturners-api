/**
 * 
 */
package com.pageturners.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pageturners.model.Books;
import com.pageturners.service.BookService;

@RestController
public class BookController {
	
	@Autowired
	BookService bookService;

	@RequestMapping(value = "/books")
	public List<Books> getBooks() {
		return bookService.getBooks();
	}

	@RequestMapping(value = "/books/{id}")
	public Books getBook(@PathVariable Integer id) {
		return bookService.getBookById(id);
	}
	
	@RequestMapping(value = "/books/category/{id}")
	public List<Books> getBookByCategory(@PathVariable Integer id) {
		return bookService.getBookByCategory(id);
	}
}
