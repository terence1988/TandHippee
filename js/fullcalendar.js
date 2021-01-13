let taskPlanner = new TaskManager();
taskPlanner.readTasks();
document.addEventListener('DOMContentLoaded', function () {
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: 'dayGridMonth',
	});
	let today = new Date().toLocaleDateString(undefined, {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	});
	let initDate = today.split('/').reverse().join('-');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: 'dayGridMonth',
		timeZone: 'local',
		initialDate: initDate,
		aspectRatio: 1.78,
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay',
		},
		events: taskPlanner.events,
	});
	calendar.render();
});
const clsBtn = document.getElementById('clsBtn');
clsBtn.addEventListener('click', () => {
	localStorage.clear();
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: 'dayGridMonth',
	});
	let today = new Date().toLocaleDateString(undefined, {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	});
	let initDate = today.split('/').reverse().join('-');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: 'dayGridMonth',
		timeZone: 'local',
		initialDate: initDate,
		aspectRatio: 1.78,
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay',
		},
		events: taskPlanner.events,
	});
	calendar.render();
});
