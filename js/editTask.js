const bookCard = document.querySelector('#book-card');

// Add an 'onclick' event listener to the Tasks List
bookCard.addEventListener('click', (event) => {
	// Check if a "Mark As Read" button was clicked
	if (event.target.classList.contains('done-button')) {
		// Get the parent Book
		const parentBook = event.target.parentElement.parentElement;

		// Get the bookId of the parent Book.
		const bookId = Number(parentBook.id);

		// Get the book from the BookManager using the bookId
		const book = bookManager.getBookById(bookId);

		// Update the book status to 'READ'
		book.status = 'READ';

		// Render the books
		bookManager.render();
	}
});
