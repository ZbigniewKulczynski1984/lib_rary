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

function display() {
	books.textContent = '';
	let index = 0;
	myLibrary.forEach((book) => {
		function createBookElement(el, name, content) {
			const elem = document.createElement(el);
			div.appendChild(elem);
			elem.textContent = name;
			const elem2 = document.createElement(el);
			elem2.textContent = content;
			div.appendChild(elem2);
		}

		const div = document.createElement('div');
		div.classList.add('container');
		books.appendChild(div);

		createBookElement('h4', 'title:', `${book.title}`);
		createBookElement('h4', 'author:', `${book.author}`);
		createBookElement('h4', 'pages:', `${book.pages}`);

		const checkbox = document.createElement('button');
		if (book.read) {
			checkbox.textContent = 'read';
		} else {
			checkbox.textContent = 'not read';
		}
		div.appendChild(checkbox);

		const removeBookBtn = document.createElement('button');
		removeBookBtn.classList.add('remove-book-btn');
		removeBookBtn.textContent = 'remove';

		removeBookBtn.dataset.linkedArray = index;
		index++;
		div.appendChild(removeBookBtn);

		removeBookBtn.addEventListener('click', removeBookFromLibrary);

		function removeBookFromLibrary() {
			let getBookToRemove = removeBookBtn.dataset.linkedArray;
			myLibrary.splice(parseInt(getBookToRemove), 1);
			div.remove();
			display();
		}

		checkbox.addEventListener('click', () => {
			if (book.read) {
				book.read = false;
				checkbox.textContent = 'not read';
			} else {
				book.read = true;
				checkbox.textContent = 'read';
			}
		});
	});
}
