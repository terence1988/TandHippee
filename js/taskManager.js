class TaskManager {
	//Create this Class to CRUD the whole webpage
	constructor() {
		// Set the currentId value to localStorage count
		this.currentId = 0; // sometimes it has previous count
		// Initialize an empty array to save the events added
		this.events = [];
		// Set the currentId value to currentId
		//this.currentId = currentId;
	}
	/*Add new events */
	// Create a method with an object to add an event
	createTask(
		title,
		assignedTo,
		taskStatus,
		startDate = '',
		endDate,
		description
	) {
		//parse Dates
		let nowDate = new Date();
		let nowMonth = (nowDate.getMonth() + 1).toString().padStart(2, 0);
		let nowDay = nowDate.getMonth().toString().padStart(2, 0);
		const currentDate = `${nowDate.getFullYear()}-${nowMonth}-${nowDay}`;
		startDate ? '' : (startDate = currentDate);
		//reset all card Ids in local storage
		let lastCardId = getCardID();

		if (this.currentId > lastCardId) {
			this.currentId = lastCardId;
		}
		//Construct the task
		const newTask = {
			title: title,
			start: startDate,
			end: endDate,
			assignedTo: assignedTo,
			dueDate: endDate,
			taskDetails: description,
			taskStatus: taskStatus,
			currentId: this.currentId,
		};
		// push the new book into the array
		window.localStorage.setItem(`${this.currentId}`, JSON.stringify(newTask));
		this.events.push(
			JSON.parse(window.localStorage.getItem(`${this.currentId}`))
		); //leave a copy in local storage
	}
	readTasks(id) {
		return JSON.parse(window.localStorage.getItem(id));
	}
	updateTasks(id) {
		let item = readTasks(id);
	}

	deleteTasks(id) {}
	/*Display list of events*/
	renderTasks() {
		const eventsHtmlList = [];
		for (let i = 0; i < Object.keys(window.localStorage).length; i++) {
			const events = this.events[i];
			const eventHtml = createTaskCard(
				events.currentId,
				events.title,
				events.taskStatus,
				events.taskDetails,
				events.assignedTo,
				events.dueDate
			);
			eventsHtmlList.push(eventHtml);
		}
		//console.log(eventsHtmlList);
		const eventsHtml = eventsHtmlList.join('\n');
		const eventsList = document.querySelector('#card-list');
		eventsList.innerHTML = eventsHtml;
	}
}

const cardTemplate = (
	index,
	title,
	taskStatus,
	taskDetails,
	assignedTo,
	dueDate
) => {
	return `
  <li class="list-group-items card mb-3 mr-3" id="card-${index}">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <span class="badge ${
			taskStatus === 'DONE' ? 'badge-secondary' : 'badge-primary'
		}">${taskStatus}</span>
    <p class="card-text">${taskDetails}</p>
    <p class="card-text">${assignedTo}</p>
    <p class="card-text">${dueDate}</p>
    <button href="#" class="btn btn-primary">Done</button>
    <button href="#" class="btn btn-primary">Delete</button>
  </div>
  </li>
`;
};

//Find the smallest missing int  //key was string Number.parseInt
//Just return the number comparing to the localStorage
const getCardId = () => {
	let maxCards = Object.keys(window.localStorage)
		.map((i) => Number(i))
		.sort(function (a, b) {
			return a - b;
		});
	let id = '';
	if (maxCards.length === 1) {
		return (id = 2);
	}
	if (maxCards.length === 0) {
		return (id = 1);
	}
	for (let j = 0; j < maxCards.length; j++) {
		if (maxCards[j] !== j + 1) {
			return (id = j + 1);
		} else id = maxCards.length + 1;
	}
	return id;
};

// Get an Id from localStorage

///
// cloneCardBySmallMissedId() {
// 	let maxCards = Object.keys(window.localStorage)
// 		.map((i) => Number(i))
// 		.sort(function (a, b) {
// 			return a - b;
// 		});
// 	let lastCardId = getCardID();
// 	let maxCardId = maxCards.pop();
// 	const card = JSON.parse(window.localStorage.getItem(maxCardId));
// 	card.currentId = lastCardId;
// 	window.localStorage.setItem(`${lastCardId}`, JSON.stringify(card));
// }
///
