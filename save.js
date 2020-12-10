var elements= [];
 
let taskDescription = document.queryBySelector('#taskDetails');
let taskAssigned = document.querySelector('#inputAssign');
let taskDueDate = document.querySelector('#inputDate');
let taskStatus = document.querySelector('#taskStatus');
 
//storage the data in window
window.onload = function(){
    if(JSON.parse(localStorage.getItem("taskForm"))!==null){
//convert into JSON format
       elements= JSON.parse(localStorage.getItem("taskForm"));
       console.log(localStorage.getItem('taskForm'))
       display();
    }
}
//end storage window

function addElement(){
    if ((taskDescription && taskAssigned) == ""){
        console.error('invalid Input');
    } else {
        elements.push(taskDescription.value);
        elements.push(taskAssigned.value);
        elements.push(taskDueDate.value);
        elements.push(taskStatus.value);
        console.log(elements);
        alert(elements);      
    }
}
 //add local STORAGE
 if (localStorage.getItem("taskForm")==null){
    localStorage.setItem("taskForm",JSON.stringify(elements));
}
else{
    localStorage.setItem("taskForm",JSON.stringify(elements));

}
console.log(localStorage.getItem("taskForm"));
//end local storage
    display();

function display(){
    taskDescription.innerHTML = "Enter here";
    taskAssigned.innerHTML = "Enter here";
    for (let i=0;i<elements.length;i++){
        taskDescription.innerHTML += elements[i];
        taskAssigned.innerHTML += elements[i];
        console.log(elements[i]);
    }
}



/*
// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');

// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    const errorMessage = document.querySelector('#alertMessage');
    
    
    /*
        Validation code here
    */

    // Get the values of the inputs
    /*const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;
    if(!validFormFieldInput(name)){
        errorMessage.innerHTML = "Invalid name input";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }

});

function validFormFieldInput(data){
    return data !== null && data !== '';
}
*/