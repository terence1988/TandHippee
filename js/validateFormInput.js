// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');

// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
	// Prevent default action
	event.preventDefault();

	// Select the inputs
	const newTaskNameInput = document.querySelector('#inputTask');
	const newTaskDescription = document.querySelector('#inputDescription');
	const newTaskAssignedTo = document.querySelector('#inputAssignee');
  const newTaskDueDate = document.querySelector('#inputDate');
  const newTaskStatus = document.querySelector('#taskStatus');
  //errorMessages
  const errorMessageName = document.querySelector('#alertMessageName');
  const errorMessageDescription = document.querySelector('#alertMessageDesc');
  const errorMessageAssignedTo = document.querySelector('#alertMessageAssign');
  const errorMessageDueDate = document.querySelector('#alertMessageDueDate');
  const errorMessageTaskStatus = document.querySelector('#alertMessageTaskStatus');

	/*
        Validation code here
    */

	// Get the values of the inputs
	const name = document.querySelector('#inputTask').value;
	const description = document.querySelector('#inputDescription').value;
	const assignedTo = document.querySelector('#inputAssignee').value;
  const dueDate = document.querySelector('#inputDate').value;
  const taskStatus = document.querySelector('#taskStatus').value;
//Validate form
	if (!validFormFieldInput(name)) {
		errorMessageName.innerHTML = '\xa0\xa0What would you like to do?';
		errorMessageName.style.display = 'inline';
	} else {
		errorMessageName.style.display = 'none';
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
	if (Math.floor(Date.parse(dueDate)/1000) < Math.floor(new Date().getTime()/1000)) {
		errorMessageDueDate.innerHTML = '\xa0\xa0How can you get it done in the past?';
		errorMessageDueDate.style.display = 'inline';
  } else if (!dueDate) {
    errorMessageDueDate.innerHTML = '\xa0\xa0Please select a date';
		errorMessageDueDate.style.display = 'inline';
  }
  else 
  {
		errorMessageDueDate.style.display = 'none';
  }
//Validate form
// storeData on submit
  if (name && assignedTo && description && dueDate && errorMessageTaskStatus) {
  let currentDate = new Date();
  const startDate = `${currentDate.getFullYear()}-${currentDate.getDate()}-${currentDate.getMonth()}`
  storeFormInLocalStorage(name,assignedTo,description,startDate,dueDate);
  }
});

function validFormFieldInput(data) {
	return data !== null && data !== '';
}

function storeFormInLocalStorage (name,description,assignedTo,startDate,dueDate) {
  let index = Object.keys(localStorage).length;
  //key in local storage
  let conference = {
  groupId:'',
  title : `${name}`,
  start : `${startDate}`,
  end : `${dueDate}`,
  assigneeName : `${assignedTo}`,
  dueDate : `${dueDate}`,
  taskDetails :`${description}`,
  taskStatus : ''
  };
  //Data format in local storage, some props is for full calendar
  window.localStorage.setItem(`${index}`, JSON.stringify(conference));
}