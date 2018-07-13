package com.pageturners.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "books")
public class Books {
	
	@Id
	@Column(name = "book_id")
	private int id;
	
	@Column(name = "category_id")
	private int categoryId;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "author")
	private String author;
	
	@Column(name = "price")
	private String price;
	
	@Column(name = "image_url")
	private String imageUrl;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "rating")
	private String rating;
	
	@Column(name = "rating_count")
	private String ratingCount;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public String getRatingCount() {
		return ratingCount;
	}
	public void setRatingCount(String ratingCount) {
		this.ratingCount = ratingCount;
	}
	
	@Override
	public String toString() {
		return "Books [id=" + id + ", categoryId=" + categoryId + ", name=" + name + ", author=" + author + ", price="
				+ price + ", imageUrl=" + imageUrl + ", description=" + description + ", rating=" + rating
				+ ", ratingCount=" + ratingCount + "]";
	}
}
