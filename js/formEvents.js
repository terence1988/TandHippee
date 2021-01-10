const taskPlanner = new TaskManager(); //Created a obj for EventManager class
// Select the New Task Form
const taskForm = document.querySelector('#taskForm');
//Force due date later than today
let today = new Date().toISOString().split('T')[0];
document.getElementById('dueDate').setAttribute('min', today);

// Add an 'onsubmit' event listener
taskForm.addEventListener('submit', (event) => {
	// Prevent default action
	event.preventDefault();

	//errorMessages
	const errorMessageTitle = document.querySelector('#alertMsgTitle');
	const errorMessageDescription = document.querySelector('#alertMsgDesc');
	const errorMessageAssignedTo = document.querySelector('#alertMsgAssign');

	//Get value
	let title = document.querySelector('#inputTask').value;
	let assignedTo = document.querySelector('#inputAssignee').value;
	let description = document.querySelector('#inputDescription').value;
	let startDate = document.querySelector('#startDate').value;
	let dueDate = document.querySelector('#dueDate').value;
	let taskStatus = document.querySelector('#taskStatus').value;

	//Validate form
	if (!validFormFieldInput(title)) {
		errorMessageTitle.innerHTML = '\xa0\xa0What would you like to do?';
		errorMessageTitle.style.display = 'inline';
	} else {
		errorMessageTitle.style.display = 'none';
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
	//Validate form
	console.log(dueDate);
	// storeData on submit
	if (title && assignedTo && description && dueDate && taskStatus) {
		taskPlanner.createTask(
			title,
			assignedTo,
			taskStatus,
			startDate,
			dueDate,
			description
		);
		//location.replace('https://terence1988.github.io/TandHippee/calendar.html'); web
		//promise style should be better
		setTimeout((window.location.href = './index.html'), 4000);
		event.target.reset();
	}
});

const validFormFieldInput = (data) => {
	return data !== null && data !== '';
};
