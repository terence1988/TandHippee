class taskManager {
	// Create a constructor to initialize array
	constructor() {
		// Set the currentId value to localStorage count
		this.currentId = Object.keys(window.localStorage).length + 1; // sometimes it has previous count
		setInterval(() => {
			this.currentId = Object.keys(window.localStorage).length + 1;
		}, 500);
		// Initialize an empty array to save the events added
		this.events = [];
		// Set the currentId value to currentId
		//this.currentId = currentId;
	}
	/*Add new events */
	// Create a method with an object to add an event
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
			currentId: this.currentId,
		};
		// push the new book into the array
		window.localStorage.setItem(`${this.currentId}`, JSON.stringify(newEvent));
		this.events.push(
			JSON.parse(window.localStorage.getItem(`${this.currentId}`))
		); //leave a copy in local storage
	}
	//Render triggered by the submit event
	pendEvents() {
		function allStorage() {
			var values = [],
				keys = Object.keys(localStorage),
				i = keys.length;
			while (i--) {
				values[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
			}
			return values;
		}
		this.events = allStorage().filter(Boolean); //function collects and converts to object and filter the invalid element
	}
	// Get an Id from localStorage
	getCardById(id) {
		return JSON.parse(window.localStorage.getItem(id));
	}

	///
	cloneCardBySmallMissedId() {
		let maxCards = Object.keys(window.localStorage)
			.map((i) => Number(i))
			.sort(function (a, b) {
				return a - b;
			});
		let lastCardId = getCardID(maxCards);
		let maxCardId = maxCards.pop();
		const card = JSON.parse(window.localStorage.getItem(maxCardId));
		card.currentId = lastCardId;
		window.localStorage.setItem(`${lastCardId}`, JSON.stringify(card));
	}
	///

	/*Display list of events*/
	renderEvents() {
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

const createTaskCard = (
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
    <span class="badge badge-primary">${taskStatus}</span>
    <p class="card-text">${taskDetails}</p>
    <p class="card-text">${assignedTo}</p>
    <p class="card-text">${dueDate}</p>
    <a href="#" class="btn btn-primary done-button">Done</a>
    <a href="#" class="btn btn-primary delete-button">Delete</a>
  </div>
  </li>
`;
};

//Find the smallest missing int  //why need a break?
const getCardID = (maxCards) => {
	let id = '';
	if (maxCards.length === 1) {
		return (id = 2);
	}
	console.log(maxCards);
	for (let j = 0; j < maxCards.length; j++) {
		if (maxCards[j] !== j + 1) {
			id = j + 1;
			break;
		} else id = maxCards.length + 1;
	}
	return id;
};
