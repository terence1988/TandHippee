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

	// push the new book into the array

	//leave a copy in local storage
	pendEvents() {
		console.log(`called ${this.currentId}`);
		this.events.push(
			JSON.parse(window.localStorage.getItem(`${this.currentId}`))
		);
		// /*Display cards of books*/

		// Select the empty div from the HTML and assign it to a variable
		const card = document.querySelector('#card-list');
		// Create a new element <ul> in the html file and give it a class
		const list = document.createElement('li');
		list.className = 'list-group-items mb-3';
		list.style = 'width: 18rem';
		// Create an HTML card to display the new book added
		list.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Title</h5>
        <span class="badge badge-primary">Name</span>
        <p class="card-text">$somethgin</p>
        <p class="card-text">this</p>
        <p class="card-text">that</p>
        <a href="#" class="btn btn-primary">Edit</a>
        <a href="#" class="btn btn-primary">Delete</a>
      </div>
    </div>`;
		// Append the new HTML card to the empty div
		card.appendChild(list);
	}
}

const eventManager = new EventManager(0);
setInterval(console.log(eventManager), 1000); //1.No date passed from local storage, 2.
