const eventManager = new EventManager(0);
// Select the New Task Form
const taskForm = document.querySelector('#taskForm');
// Add an 'onsubmit' event listener
taskForm.addEventListener('submit', (event) => {
	console.log('GetEvent');
	// Prevent default action
	event.preventDefault();

	//errorMessages
	const errorMessagetitle = document.querySelector('#alertMessagetitle');
	const errorMessageDescription = document.querySelector('#alertMessageDesc');
	const errorMessageAssignedTo = document.querySelector('#alertMessageAssign');
	const errorMessageDueDate = document.querySelector('#alertMessageDueDate');
	const errorMessageTaskStatus = document.querySelector(
		'#alertMessageTaskStatus'
	);

	/*
        Validation code here
    */

	// Get the values of the inputs
	const title = document.querySelector('#inputTask').value;
	const description = document.querySelector('#inputDescription').value;
	const assignedTo = document.querySelector('#inputAssignee').value;
	const dueDate = document.querySelector('#inputDate').value;
	const taskStatus = document.querySelector('#taskStatus').value;

	console.log(title);
	console.log(description);
	console.log(assignedTo);
	console.log(dueDate);
	console.log(taskStatus);

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
	if (
		Math.floor(Date.parse(dueDate) / 1000) <
		Math.floor(new Date().getTime() / 1000)
	) {
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
	if (title && assignedTo && description && dueDate) {
		eventManager.addEvent(title, assignedTo, description, dueDate, taskStatus);
	}
});

function validFormFieldInput(data) {
	return data !== null && data !== '';
}

// function storeFormInLocalStorage(
// 	title,
// 	description,
// 	assignedTo,
// 	startDate,
// 	dueDate,
// 	taskStatus
// ) {
// 	let index = Object.keys(localStorage).length;
// 	//key in local storage
// 	let conference = {
// 		title: `${title}`,
// 		start: `${startDate}`,
// 		end: `${dueDate}`,
// 		assignedTo: `${assignedTo}`,
// 		dueDate: `${dueDate}`,
// 		taskDetails: `${description}`,
// 		taskStatus: `${taskStatus}`,
// 	};
// 	//Data format in local storage, some props is for full calendar
// 	window.localStorage.setItem(`${index}`, JSON.stringify(conference));
// }
