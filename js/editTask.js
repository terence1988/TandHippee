const taskCard = document.querySelector('#card-list');
// Add an 'onclick' event listener to the Tasks List
taskCard.addEventListener('click', (event) => {
	// Check if a "Mark As Read" button was clicked
	if (event.target.classList.contains('done-button')) {
		// Get the parent Book
		const parentCard = event.target.parentElement.parentElement;
		// Get the cardId of the parent Book.
		const cardId = parentCard.id[5];
		// Get the book from the BookManager using the bookId
		const card = eventManager.getCardById(cardId);
		// Update the book status to 'READ'
		card.taskStatus = 'DONE';
		window.localStorage.setItem(`${cardId}`, JSON.stringify(card));
		// Render the books
		eventManager.pendEvents();
		eventManager.renderEvents();
	}
});

taskCard.addEventListener('click', (event) => {
	// Check if a "Mark As Read" button was clicked
	if (event.target.classList.contains('delete-button')) {
		// Get the parent Book
		const parentCard = event.target.parentElement.parentElement;
		// Get the cardId of the parent Book.
		const cardId = parentCard.id[5];
		// Get the book from the BookManager using the bookId
		window.localStorage.removeItem(`${cardId}`);
		// Render the books
		eventManager.pendEvents();
		eventManager.renderEvents();
	}
});
