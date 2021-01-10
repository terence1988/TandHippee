let taskPlanner = new TaskManager();
document.addEventListener('DOMContentLoaded', function () {
	taskPlanner.readTasks();
	taskPlanner.renderTasks();
});

// setInterval(() => {
// 	eventManager.checkStatus();
// }, 1000); //This is just interesting
