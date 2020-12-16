//Refactoring to class
class EventManager {
	// Create a constructor with a parameter currentid set to 0
	constructor(currentId = 0) {
		// Set the currentId value to localStorage count
		//let currentId = Object.keys(localStorage).length;
		// Initialize an empty array to save the books added
		this.events = [];
		// Set the currentId value to currentId
		this.currentId = currentId;
	}
	/*Add new books */
	// Create a method with an object to add a book
	addEvent(title, assignedTo, description, endDate, taskStatus) {
		let currentDate = new Date();
		const startDate = `${currentDate.getFullYear()}-${
			currentDate.getMonth() + 1
		}-${currentDate.getDate()}`;
		const newEvent = {
			title: title,
			start: startDate,
			end: endDate,
			assignedTo: assignedTo,
			dueDate: endDate,
			taskDetails: description,
			taskStatus: taskStatus,
			currentId: this.currentId++,
		};
		// push the new book into the array
		this.events.push(newEvent);
		console.log(newEvent);
		//	window.localStorage.setItem(`${currentId}`, JSON.stringify(newEvent));

		// /*Display cards of books*/

		// Select the empty div from the HTML and assign it to a variable
		const card = document.querySelector('#card-list');
		// Create a new element <ul> in the html file and give it a class
		const list = document.createElement('li');
		list.className = 'list-group-items card mb-3';
		list.style = 'width: 18rem';
		// Create an HTML card to display the new book added
		list.innerHTML = `
  <div class="card-body">
    <h5 class="card-title">${newEvent.title}</h5>
    <span class="badge badge-primary">${newEvent.taskStatus}</span>
    <p class="card-text">${newEvent.taskDetails}</p>
    <p class="card-text">${newEvent.assignedTo}</p>
    <p class="card-text">${newEvent.dueDate}</p>
    <a href="#" class="btn btn-primary">Edit</a>
    <a href="#" class="btn btn-primary">Delete</a>
  </div>
`;
		// Append the new HTML card to the empty div
		card.appendChild(list);
	}
}

//
