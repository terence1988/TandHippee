const cardTemplate = (
	index,
	title,
	assignedTo,
	taskStatus,
	dueDate,
	taskDetails
) => {
	return `
  <li class="list-group-items card mb-3 mr-3" id="card-${index}" >
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <span class="badge ${
			taskStatus === 'Will Do'
				? 'badge-danger'
				: taskStatus === 'In Progress'
				? 'badge-warning'
				: taskStatus === 'Completed'
				? 'badge-success'
				: 'badge-primary'
		}">${taskStatus}</span>
    <p class="card-text">${taskDetails}</p>
    <p class="card-text">${assignedTo}</p>
    <p class="card-text">${dueDate}</p>
    <button class="btn btn-primary finBtn">Done</button>
    <button class="btn btn-primary startBtn">Start</button>
    <button type="button" class="btn delete-icon delBtn"></button>
    <button type="button" class="btn edit-icon editBtn"></button>
  </div>
  </li>
`;
};

class TaskManager {
	//Create this Class to CRUD the whole webpage
	constructor(currentId = 0) {
		// Set the currentId value to localStorage count
		this.currentId = currentId;
		// Initialize an empty array to save the events added
		this.events = [];
		this.cards = [];
		//this.currentId = currentId;
	}
	/*Add new events */
	// Create a method with an object to add an event
	createTask(
		title,
		assignedTo,
		taskStatus,
		startDate = '',
		dueDate,
		description
	) {
		//parse Dates
		// let nowDate = new Date();
		// let nowMonth = (nowDate.getMonth() + 1).toString().padStart(2, 0);
		// let nowDay = nowDate.getDate().toString().padStart(2, 0);
		// const currentDate = `${nowDate.getFullYear()}-${nowMonth}-${nowDay}`;
		// startDate ? '' : (startDate = currentDate);
		let today = new Date().toLocaleDateString(undefined, {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		});
		//Pendding a small popup
		if (Date.parse(startDate) < Date.now()) {
			alert('Task Start Date is set to TODAY');
			startDate = today.split('/').reverse().join('-');
		} else {
			startDate = startDate;
		}
		//Get a new id based on the info from localstorage
		this.currentId = this.updateCurrentId();
		//Construct the task
		const newTask = {
			title: title,
			assignedTo: assignedTo,
			start: startDate,
			end: dueDate,
			dueDate: dueDate,
			taskDetails: description,
			taskStatus: taskStatus,
			currentId: this.currentId,
		};
		// push the new book into the array
		localStorage.setItem(`${this.currentId}`, JSON.stringify(newTask));
	}
	readTask(id) {
		return JSON.parse(localStorage.getItem(id));
	}

	readTasks() {
		let keys = Object.keys(localStorage);
		let i = keys.length;
		this.events = []; //As the localStorage grows, I need re-initialize this array
		while (i--) {
			if (keys[i] >= 900) {
				continue;
			}
			this.events.push(JSON.parse(localStorage.getItem(keys[i])));
		}
	}

	updateTask(id, card) {
		localStorage.setItem(id, JSON.stringify(card));
		this.readTasks();
	}

	deleteTask(id) {
		//move item larger than 900
		let swapContent = this.readTask(id);
		let deleteKey = Object.keys(localStorage)
			.map((i) => Number(i))
			.sort(function (a, b) {
				return a - b;
			})
			.pop();
		deleteKey < 900 ? (deleteKey = 900) : (deleteKey = deleteKey + 1);
		swapContent.currentId = deleteKey;
		localStorage.setItem(deleteKey, JSON.stringify(swapContent));
		localStorage.removeItem(id);
		//Object.keys seems be queried every time it is invoked

		//reinitialize existing task array
		let index = [];
		for (let i of Object.keys(localStorage)) {
			if (parseInt(i) >= 900) {
				continue;
			}
			index.push(i);
		}
		for (let j = 0; j < index.length; j++) {
			let swapCards = localStorage.getItem(index[j]);
			let newCards = JSON.parse(swapCards);
			newCards.currentId = j;
			localStorage.setItem(j, JSON.stringify(newCards));
		}
	}

	clearTasks() {
		localStorage.clear();
	}
	//return the minimal available int
	updateCurrentId() {
		let maxCards = Object.keys(localStorage)
			.map((i) => Number(i))
			.sort(function (a, b) {
				return a - b;
			});
		let size = maxCards.length;
		let id = '';
		if (size === 0) {
			return (id = 1);
		}
		// Check is all numbers 0 to n - 1  are present in array
		if (maxCards[size - 1] === maxCards.length - 1) {
			return (id = maxCards.length);
		}
		for (let index = 0; index < size; index++) {
			if (index < parseInt(maxCards[index])) {
				return (id = index);
			}
		}
	}
	editTask(id) {
		//help to fill the form -- query string
		const queryString = '?taskId=' + id;
		window.location.href = './form.html' + queryString;
	}
	// Generate html from this.events array
	renderTasks() {
		this.readTasks();
		this.cards = [];
		for (const task of this.events) {
			const cardHTML = cardTemplate(
				task.currentId,
				task.title,
				task.assignedTo,
				task.taskStatus,
				task.dueDate,
				task.taskDetails
			);
			this.cards.push(cardHTML);
		}
		//console.log(tasksHtmlList);
		const cardsHtml = this.cards.join('\n');
		const tasksList = document.querySelector('#card-list');
		tasksList.innerHTML = cardsHtml;
	}
	//Find the smallest missing int  //key was string Number.parseInt
	//Just return the number comparing to the localStorage
}

// int findFirstMissing(int[] arr , int start ,int end, int first)
// {
// if (start < end)
// {
// int mid = (start+end)/2;

// /** Index matches with value
// at that index, means missing
// element cannot be upto that point */
// if (arr[mid] != mid+first)
// return findFirstMissing(arr, start,
//          mid , first);
// else
// return findFirstMissing(arr, mid+1,
//          end , first);
// }
// return start+first;

// }

//draggable="true"  only mark the element as dragable
module.exports = TaskManager; // This is needed to run testing scripts when require() is invoked
