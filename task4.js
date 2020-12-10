
 let elements= [];
 let taskDescription = document.querySelector('#taskDetails');
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
    taskDescription.innerHTML = "";
    taskAssigned.innerHTML = "";
    for (let i=0;i<elements.length;i++){
        taskDescription.innerHTML += elements[i];
        taskAssigned.innerHTML += elements[i];
        console.log(elements[i]);
    }
}


