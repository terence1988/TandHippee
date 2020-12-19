const cloneCard = document.querySelector('#cloneCards');
cloneCard.addEventListener('click', (event) => {
	eventManager.cloneCardBySmallMissedId();
	eventManager.pendEvents();
	eventManager.renderEvents();
});
