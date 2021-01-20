const taskPlanner = new TaskManager(); //Created a obj for EventManager class
// Select the New Task Form
const taskForm = document.querySelector('#taskForm');
//Force due date later than today
let tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
let today = new Date(Date.now() - tzoffset).toISOString().split('T')[0]; //parseit for localeTime
document.getElementById('dueDate').setAttribute('min', today);
const id = window.location.search.split('').pop();
let Form = {};
if (id) {
	form = taskPlanner.readTask(id);
	let title = document.querySelector('#inputTask');
	let assignedTo = document.querySelector('#inputAssignee');
	let description = document.querySelector('#inputDescription');
	let startDate = document.querySelector('#startDate');
	let dueDate = document.querySelector('#dueDate');
	let taskStatus = document.querySelector('#taskStatus');
	title.value = form.title;
	assignedTo.value = form.assignedTo;
	description.value = form.taskDetails;
	startDate.value = form.start;
	dueDate.value = form.dueDate;
	taskStatus.value = form.taskStatus;
}
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
	if (id) {
		form = {
			title: title,
			assignedTo: assignedTo,
			start: startDate,
			end: dueDate,
			dueDate: dueDate,
			taskDetails: description,
			taskStatus: taskStatus,
			currentId: id,
		};
		taskPlanner.updateTask(id, form);
		setTimeout((window.location.href = './index.html'), 4000);
		event.target.reset();
	} else if (title && assignedTo && description && dueDate && taskStatus) {
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
		// storeData on submit
	}
});

const validFormFieldInput = (data) => {
	return data !== null && data !== '';
};
