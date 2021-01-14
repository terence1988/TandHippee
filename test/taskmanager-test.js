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
	});
});

// mocha + mock-local-storage
