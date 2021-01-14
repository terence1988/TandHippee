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
		taskManager.readTasks();
		const result = taskManager.events.length;
		assert.strictEqual(1, expected);
	});
});
