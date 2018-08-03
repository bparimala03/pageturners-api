CREATE DATABASE IF NOT EXISTS bookstore;

CREATE TABLE IF NOT EXISTS bookstore.books ( 
  book_id int(11) NOT NULL, 
  author varchar(255) DEFAULT NULL, 
  category_id int(11) DEFAULT NULL, 
  description varchar(255) DEFAULT NULL, 
  image_url varchar(255) DEFAULT NULL, 
  name varchar(255) DEFAULT NULL, 
  price varchar(255) DEFAULT NULL, 
  rating varchar(255) DEFAULT NULL, 
  rating_count varchar(255) DEFAULT NULL, 
  PRIMARY KEY (book_id) 
);

CREATE TABLE IF NOT EXISTS bookstore.categories ( 
  category_id int(11) NOT NULL, 
  name varchar(45) DEFAULT NULL, 
  PRIMARY KEY (category_id) 
);

DELETE FROM bookstore.categories;

DELETE FROM bookstore.books;

INSERT INTO bookstore.categories(category_id, name) VALUES (1, 'Arts & Photography');
INSERT INTO bookstore.categories(category_id, name) VALUES (2, 'Biographies');
INSERT INTO bookstore.categories(category_id, name) VALUES (3, 'Computer books');
INSERT INTO bookstore.categories(category_id, name) VALUES (4, 'Entertainment');
INSERT INTO bookstore.categories(category_id, name) VALUES (5, 'History');
INSERT INTO bookstore.categories(category_id, name) VALUES (6, 'New Releases');
INSERT INTO bookstore.categories(category_id, name) VALUES (7, 'Best Sellers');
INSERT INTO bookstore.categories(category_id, name) VALUES (8, 'Adults');
INSERT INTO bookstore.categories(category_id, name) VALUES (9, 'Kids');

INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(1,1,'Sanjaya Kumar Mahapatra','N/A','/opt/image/na.jpg','Goddess Varahi in Indian Art','1663','4.5','987');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(2,1,'Arvind Tripathi','N/A','/opt/image/na.jpg','Art Archaeology and Architecture','1235','4','56');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(3,1,'S R Arora','N/A','/opt/image/na.jpg','Historical Monuments of India','945','3.5','45');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(4,1,'James Stevens Curl','N/A','/opt/image/na.jpg','The Oxford Dictionary of Architecture','1710','4.1','58');

INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(5,2,'Dhanraj Dongare','N/A','/opt/image/na.jpg','Dr Ambedkar Thought: Downtrodden','1425','4','45');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(6,2,'Ved Prakash','N/A','/opt/image/na.jpg','Subhash Chandra Bose','1378','3','12');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(7,2,'C.P. Raj','N/A','/opt/image/na.jpg','Lala Lajpat Rai','1378','4','569');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(8,2,'Ved Prakash','N/A','/opt/image/na.jpg','Sardar Vallabh Bhai Patel','1378','4','589');

INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(9,3,'Charles P. Pfleeger','N/A','/opt/image/na.jpg','Security in Computing','899','3.5','45');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(10,3,'William Stallings','N/A','/opt/image/na.jpg','Network Security Essentials','638','4','85');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(11,3,'Paul J. Deitel','N/A','/opt/image/na.jpg','Java 9 for Programmers','854','4','25');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(12,3,'Abbey Deitel','N/A','/opt/image/na.jpg','Internet and World Wide Web','872','3','55');

INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(13,4,'Ram Avtar "Vir"','N/A','/opt/image/na.jpg','Theory of Indian Music (Learn to Play)','242','4','10');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(14,4,' Pt Ravi Shankar Prasanna','N/A','/opt/image/na.jpg','Indian Classical Music: An Audio Visual','713','3.5','58');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(15,4,'Amiya Mukherjee','N/A','/opt/image/na.jpg','Atiyah-Singer Index Theorem','475','3','94');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(16,4,'M.K. Raghavendra','N/A','/opt/image/na.jpg','The Politics of Hindi Cinema','850','4','63');

INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(17,5,'Jyoti Mohan','N/A','/opt/image/na.jpg','Claiming India','945','4','74');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(18,5,'Nicholas Roerich','N/A','/opt/image/na.jpg','Heart of Asia','127','3','124');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(19,5,'Rashmi Singh','N/A','/opt/image/na.jpg','Gupt Vakatak Sanskrit','1425','4','45');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(20,5,'Gourishankar Hirachand Ojha','N/A','/opt/image/na.jpg','Bharatiya Prachin Lipimala','1235','3.5','74');

INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(21,6,'CA. Madhusudan Agarwal','N/A','/opt/image/na.jpg','Handbook to Income Tax Rules','1075','4','88');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(22,6,'Robert A. Haugen','N/A','/opt/image/na.jpg','Modern Investment Theory, 5th ed','617','3','36');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(23,6,'Shilpa Shetty Kundra','N/A','/opt/image/na.jpg','The Great Indian Diet','166','4','88');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(24,6,'CA. Manjusha Goel','N/A','/opt/image/na.jpg','About Students Guide to Income Tax','498','4','77');

INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(25,7,'Durjoy Datta','N/A','/opt/image/na.jpg','The Boy Who Loved','179','4.5','333');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(26,7,'Victor Kierman','N/A','/opt/image/na.jpg','From Volga to Ganga','229','4.5','566');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(27,7,'Dale Carnegie','N/A','/opt/image/na.jpg','How to Win Friends and Influence ','119','5','999');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(28,7,'Puru Dadheech','N/A','/opt/image/na.jpg','Abhinay Darpan','133','4.5','874');

INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(29,8,'Parvinder S. Bali','N/A','/opt/image/na.jpg','Theory of Bakery and Patisserie','298','3','55');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(30,8,'Saurav Singh','N/A','/opt/image/na.jpg','Handbook of Dairy Foods and Nutrition','1853','4','11');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(31,8,'EIRI','N/A','/opt/image/na.jpg','Complete Handbook on Food','1211','4','45');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(32,8,'EIRI','N/A','/opt/image/na.jpg','Technology of Carbonated Drinks..','1140','4','45');

INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(33,9,'Scholastic','N/A','/opt/image/Marvel Avengers Infinity War - 1000.jpg','Marvel Avengers Infinity War - 1000','445','4','58');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(34,9,'Satish Kumar Singh','N/A','/opt/image/Baal Vikas (Child Development).jpg','Baal Vikas (Child Development)','1610','4','66');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(35,9,'Sophy Williams','N/A','/opt/image/na.jpg','Christmas With You (English)','475','5','55');
INSERT INTO bookstore.books(book_id, category_id, author, description, image_url, name, price, rating, rating_count) VALUES(36,9,'Swamini Supriyananda','N/A','/opt/image/Little Yash Has Lost His Smile.jpg','Little Yash Has Lost His Smile','399','5','78');
