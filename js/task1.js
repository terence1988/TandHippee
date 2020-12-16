class TaskManager{
    constructor(currentId=0){
        this.tasks = []; 
        this.currentId = currentId;   
    

        this.addTasks()
    }

    
    addTasks(){
        const task = {
            id : this.currentId++,
            name : document.querySelector('#inputTask').Value,
            description : document.querySelector('#inputDescription').Value,
            assignedTo  :  document.querySelector('#inputAssignee').Value
        }
        this.tasks.push(task)
    display(){

    }

    
      


    }

};
window.addEventListener("load", () =>{
    let toDo = new ToDoClass();
});

