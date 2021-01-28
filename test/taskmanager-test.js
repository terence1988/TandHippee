const TaskManager = require('../js/taskManager');
const assert = require('assert');

describe('TaskManager', () => {
	it('creates an item in localStorage', function () {
		const taskManager = new TaskManager();
		const expected = 1;
		const inputArray = [
			'Title',
			'Name',
			'TO Do',
			'date',
			'date',
			'description',
		];

		taskManager.createTask(inputArray);
		const result = Object.keys(localStorage).length;
		assert.strictEqual(result, expected);
		localStorage.clear();
	});
	// mocha + mock-local-storage

	it('deletes an item in localStorage', function () {
		const taskManager = new TaskManager(0);

		const inputArray = [
			'Title',
			'Name',
			'TO Do',
			'date',
			'date',
			'description',
		];
		taskManager.createTask(inputArray);

		taskManager.deleteTask(Object.keys(localStorage).pop()); //1

		const result = parseInt(Object.keys(localStorage).pop()); //900
		assert.ok(result >= 900);
		localStorage.clear();
	});
	it('updates an item in localStorage', function () {
		const taskManager = new TaskManager(0);
		const inputArray = 'Title'; //They acrually as One to occupy the title prop
		taskManager.createTask(inputArray);
		const origionalCard = taskManager.readTask(1);
		const newCard = { ...origionalCard }; // shadow copy an object otherwise, it will pass by reference (new obj change also change old obj)
		//const clonedObj = Object.assign({}, obj); -- create an empty {}, assign old obj to new one
		newCard.title = 'New Title';

		taskManager.updateTask(1, newCard); //1

		const result = taskManager.readTask(1);

		assert.notDeepStrictEqual(origionalCard, result);
		localStorage.clear();
	});
	// it('checks the item exists in the UI', function () {
	// 	const taskManager = new TaskManager(0);
	// 	const expected = 1; //They acrually as One to occupy the title prop
	// 	const inputArray = 'Title';
	// 	taskManager.createTask(inputArray);
	// 	taskManager.renderTasks();
	// 	const result = taskManager.cards.length;
	// 	assert.strictEqual(expected, result);
	// 	localStorage.clear();
	// });
});
