const targetCard = document.getElementById('card-list');
// Add an 'onclick' event listener to the using event bubbling to response to card events

targetCard.addEventListener('click', (event) => {
	// Get the parent Book
	if (event.target.id === 'card-list') {
		return;
	}
	const parentCard = event.target.parentElement.parentElement;
	// Get the cardId of the parent Book.
	const cardId = parentCard.id[5];
	// Get the book from the BookManager using the bookId
	const card = taskPlanner.readTask(cardId);
	// Check if a "Mark As Read" button was clicked
	//console.log(event.target.nodeName); nodeName is all in capitalized
	if (
		event.target.nodeName === 'BUTTON' &&
		event.target.classList.contains('finBtn')
	) {
		// Update the book status to 'READ'
		card.taskStatus = 'Completed';
		taskPlanner.updateTask(cardId, card);
	} else if (
		event.target.nodeName === 'BUTTON' &&
		event.target.classList.contains('startBtn')
	) {
		card.taskStatus = 'In Progress';
		taskPlanner.updateTask(cardId, card);
	} else if (
		event.target.nodeName === 'BUTTON' &&
		event.target.classList.contains('delBtn')
	) {
		// Get the parent Book
		taskPlanner.deleteTask(cardId);
	} else if (
		event.target.nodeName === 'BUTTON' &&
		event.target.classList.contains('editBtn')
	) {
		// Get the parent Book
		taskPlanner.editTask(cardId);
	}

	// if (event.target.nodeName === 'P') {
	// 	event.target.classList = 'input';
	// 	event.target.setAttribute('role', 'textbox');
	// 	event.target.setAttribute('contenteditable', 'true');
	// 	console.log(event.target.getAttribute('contenteditable'));
	// 	return;
	// }
	// Render the books
	taskPlanner.renderTasks();
});

//<span class="input" role="textbox" contenteditable>99</span>
//Globally available btn to clear local storage
const clsBtn = document.getElementById('clsBtn');
clsBtn.addEventListener('click', () => {
	localStorage.clear();
	taskPlanner.render();
});

// let forDeletion = [2, 3, 5]
// let arr = [1, 2, 3, 4, 5, 3]
// arr = arr.filter(item => !forDeletion.includes(item))
// // !!! Read below about array.includes(...) support !!!
// console.log(arr)
// // [ 1, 4 ]

//It is also possible to encrypt your form data on submit
