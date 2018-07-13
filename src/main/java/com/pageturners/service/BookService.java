package com.pageturners.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pageturners.model.Books;
import com.pageturners.repository.BookRepository;

@Service
public class BookService {

	@Autowired
	private BookRepository bookRepository;

	public List<Books> getBooks() {
		List<Books> books = StreamSupport.stream(bookRepository.findAll().spliterator(), false)
				.collect(Collectors.toList());
		return books;
	}

	public Books getBookById(Integer id) {
		return bookRepository.findById(id).get();
	}
}
