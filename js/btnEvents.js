const targetCard = document.getElementById('card-list');
// Add an 'onclick' event listener to the using event bubbling to response to card events

targetCard.addEventListener('click', (event) => {
	// Check if a "Mark As Read" button was clicked
	if (event.target.classList.contains('finBtn')) {
		// Get the parent Book
		const parentCard = event.target.parentElement.parentElement;
		// Get the cardId of the parent Book.
		const cardId = parentCard.id[5];
		// Get the book from the BookManager using the bookId
		const card = taskPlanner.readTask(cardId);
		// Update the book status to 'READ'
		card.taskStatus = 'DONE';
		taskPlanner.updateTask(cardId, card);
		// Render the books
		taskPlanner.readTasks();
		taskPlanner.renderTasks();
	}
});
targetCard.addEventListener('click', (event) => {
	// Check if a "Mark As Read" button was clicked
	if (event.target.classList.contains('startBtn')) {
		// Get the parent Book
		const parentCard = event.target.parentElement.parentElement;
		// Get the cardId of the parent Book.
		const cardId = parentCard.id[5];
		// Get the book from the BookManager using the bookId
		const card = taskPlanner.readTask(cardId);
		// Update the book status to 'READ'
		card.taskStatus = 'In Progress';
		taskPlanner.updateTask(cardId, card);
		// Render the books
		taskPlanner.readTasks();
		taskPlanner.renderTasks();
	}
});

targetCard.addEventListener('click', (event) => {
	// Check if a "Mark As Read" button was clicked
	if (event.target.classList.contains('delBtn')) {
		// Get the parent Book
		const parentCard = event.target.parentElement.parentElement;
		// Get the cardId of the parent Book.
		const cardId = parentCard.id[5];
		// Get the bookId from the BookManager using the bookId
		taskPlanner.deleteTask(cardId);
		// Render the books
		taskPlanner.readTasks();
		taskPlanner.renderTasks();
	}
});

//Globally available btn to clear local storage
const clsBtn = document.getElementById('clsBtn');
clsBtn.addEventListener('click', () => {
	localStorage.clear();
	calendar.render();
});
