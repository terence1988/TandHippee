const eventsManager = new taskManager(); //Created a obj for EventManager class
// Select the New Task Form
const taskForm = document.querySelector('#taskForm');
let today = new Date().toISOString().split('T')[0];
document.getElementById('inputDate').setAttribute('min', today);

// Add an 'onsubmit' event listener
taskForm.addEventListener('submit', (event) => {
	// Prevent default action
	event.preventDefault();

	//errorMessages
	const errorMessagetitle = document.querySelector('#alertMessagetitle');
	const errorMessageDescription = document.querySelector('#alertMessageDesc');
	const errorMessageAssignedTo = document.querySelector('#alertMessageAssign');
	const errorMessageDueDate = document.querySelector('#alertMessageDueDate');

	//Get value
	let title = document.querySelector('#inputTask').value;
	let description = document.querySelector('#inputDescription').value;
	let assignedTo = document.querySelector('#inputAssignee').value;
	let dueDate = document.querySelector('#inputDate').value;
	let taskStatus = document.querySelector('#taskStatus').value;

	//Validate form
	if (!validFormFieldInput(title)) {
		errorMessagetitle.innerHTML = '\xa0\xa0What would you like to do?';
		errorMessagetitle.style.display = 'inline';
	} else {
		errorMessagetitle.style.display = 'none';
	}
	if (!validFormFieldInput(description)) {
		errorMessageDescription.innerHTML = '\xa0\xa0Please type in some details';
		errorMessageDescription.style.display = 'inline';
	} else {
		errorMessageDescription.style.display = 'none';
	}
	if (!validFormFieldInput(assignedTo)) {
		errorMessageAssignedTo.innerHTML = '\xa0\xa0Please assign it to someone';
		errorMessageAssignedTo.style.display = 'inline';
	} else {
		errorMessageAssignedTo.style.display = 'none';
	}
	if (Date.parse(dueDate) < new Date().getTime()) {
		errorMessageDueDate.innerHTML =
			'\xa0\xa0How can you get it done in the past?';
		errorMessageDueDate.style.display = 'inline';
	} else if (!dueDate) {
		errorMessageDueDate.innerHTML = '\xa0\xa0Please select a date';
		errorMessageDueDate.style.display = 'inline';
	} else {
		errorMessageDueDate.style.display = 'none';
	}
	//Validate form
	// storeData on submit
	if (title && assignedTo && description && dueDate && taskStatus) {
		eventsManager.addEvent(title, assignedTo, description, dueDate, taskStatus);
		event.target.reset();
	}
});

const validFormFieldInput = (data) => {
	return data !== null && data !== '';
};
