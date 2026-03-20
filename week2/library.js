/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/

class Book {
  title;
  author;
  pages;
  static count = 0;
  isAvailable = true;
  constructor(title, author, pages, isAvailable, count) {
    this.count = count;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }
  borrow() {
    this.isAvailable = false;
    console.log(`The Book ${this.title}is not available`);
  }
  returnBook() {
    this.isAvailable = true;
    console.log(`The Book ${this.title} is returned`);
  }
  getInfo() {
    console.log(`The ${this.title} by ${this.author}(${this.pages} pages )`);
  }
  longBook() {
    if (this.pages > 300) {
      this.count = this.count + 1;
      return true;
    }
    return false;
  }
}
let b1 = new Book("HarryPotter", "Hobbit", 1000);
let b2 = new Book("Ramayanam", "Valmiki", 10000);
let b3 = new Book("Cinderalla", "Hong Hae in", 250);
let b4 = new Book("Queen of Tears", "Baek Huyn Hon", 1500);
let b5 = new Book("Can we be Strangers again?", "Rajesh Gupta", 2500);
//Display info of all books
b1.getInfo();
b2.getInfo();
b3.getInfo();
b4.getInfo();
b5.getInfo();
//Borrow 2 books and show their availability status
b1.borrow();
b5.borrow();
//Return 1 book and show updated status
b1.returnBook();
//Count how many books are "long books" (more than 300 pages)
b1.longBook();
b2.longBook();
b3.longBook();
b4.longBook();
b5.longBook();
console.log(`no of books which has pages more than 300: ${Book.count}`);
//List all available books
if (b1.isAvailable) {
  b1.getInfo();
}
if (b2.isAvailable) {
  b2.getInfo();
}
if (b3.isAvailable) {
  b3.getInfo();
}
if (b4.isAvailable) {
  b4.getInfo();
}
if (b5.isAvailable) {
  b5.getInfo();
}
