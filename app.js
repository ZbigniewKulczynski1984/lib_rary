const form = document.querySelector('form');
const addBookBtn = document.querySelector('.add-book');
const close = document.querySelector('.close');
const submit = document.querySelector('.submit');
const books = document.querySelector('.wrapper-grid');
const remove = document.querySelectorAll('.remove');

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

let myLibrary = [];

close.addEventListener('click', () => {
	form.style.display = 'none';
});
