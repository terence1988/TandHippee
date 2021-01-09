let eventManager = new TaskManager();
document.addEventListener('DOMContentLoaded', function () {
	eventManager.pendEvents();
	eventManager.renderEvents();
});

// setInterval(() => {
// 	eventManager.checkStatus();
// }, 1000); //This is just interesting
