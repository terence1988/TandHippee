// Code By Webdevtrick ( https://webdevtrick.com )
const btn = document.querySelector('.add');
const remove = document.querySelector('.draggable');
function dragStart(e) {
	this.style.opacity = '0.4';
	dragSrcEl = this;
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', this.innerHTML);
}
function dragEnter(e) {
	this.classList.add('over');
}
function dragLeave(e) {
	e.stopPropagation();
	this.classList.remove('over');
}
function dragOver(e) {
	e.preventDefault();
	e.dataTransfer.dropEffect = 'move';
	return false;
}
function dragDrop(e) {
	if (dragSrcEl != this) {
		dragSrcEl.innerHTML = this.innerHTML;
		this.innerHTML = e.dataTransfer.getData('text/html');
	}
	return false;
}
function dragEnd(e) {
	const listItens = document.querySelectorAll('.draggable');
	[].forEach.call(listItens, function (item) {
		item.classList.remove('over');
	});
	this.style.opacity = '1';
}
function addEventsDragAndDrop(el) {
	el.addEventListener('dragstart', dragStart, false);
	el.addEventListener('dragenter', dragEnter, false);
	el.addEventListener('dragover', dragOver, false);
	el.addEventListener('dragleave', dragLeave, false);
	el.addEventListener('drop', dragDrop, false);
	el.addEventListener('dragend', dragEnd, false);
}
//DnD usually need to use [] to initialize list array
const listItens = document.querySelectorAll('.draggable');
[].forEach.call(listItens, function (item) {
	addEventsDragAndDrop(item);
});
function addNewItem() {
	const newItem = document.querySelector('.input').value;
	if (newItem != '') {
		document.querySelector('.input').value = '';
		const li = document.createElement('li');
		const attr = document.createAttribute('draggable');
		const ul = document.querySelector('ul');
		li.className = 'draggable';
		attr.value = 'true';
		li.setAttributeNode(attr);
		li.appendChild(document.createTextNode(newItem));
		ul.appendChild(li);
		addEventsDragAndDrop(li);
	}
}
btn.addEventListener('click', addNewItem);

//The basic implementation is
//1. Target became Position:Fixed to the screen
//2. Mark draggable items on the HTML and let the dragged item follow the target area style
//3. Events during the drag and drop
//4.
