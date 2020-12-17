let eventManager = new taskManager();
setInterval(eventManager.pendEvents(), 1000);
setInterval(eventManager.renderEvents(), 1000);
