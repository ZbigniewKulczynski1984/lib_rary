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

addBookBtn.addEventListener('click', () => {
	form.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', () => {
	submit.addEventListener('click', addBookToLibrary);
});

const addBookToLibrary = (e) => {
	e.preventDefault();
	let book = {
		title: document.getElementById('title').value,
		author: document.getElementById('author').value,
		pages: document.getElementById('pages').value,
		read: document.getElementById('read').checked,
	};
	myLibrary.push(book);
	form.style.display = 'none';
	form.reset();
	display();
};
