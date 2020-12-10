document.addEventListener("DOMContentLoaded", function () {
	var calendarEl = document.getElementById("calendar");
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: "dayGridMonth",
	});

	// Convert all data from local Store  can be refactored for...in... 
	function allStorage() {
		var values = [],
			keys = Object.keys(localStorage),
			i = keys.length;
		while (i--) {
			values[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
		}
		return values;
	}

	let allEvents = allStorage().filter(Boolean); //function collects and converts to object and filter the invalid element

	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: "dayGridMonth",
		initialDate: "2020-12-07",
		headerToolbar: {
			left: "prev,next today",
			center: "title",
			right: "dayGridMonth,timeGridWeek,timeGridDay",
		},
		events: allEvents,
	});
	calendar.render();
});
