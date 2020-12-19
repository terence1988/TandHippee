let eventManager = new taskManager();
document.addEventListener('DOMContentLoaded', function () {
	eventManager.pendEvents();
	eventManager.renderEvents();
});
setInterval(eventManager.pendEvents(), 1000);
setInterval(eventManager.renderEvents(), 1000);
