//taskManager input
class TaskManager{
    constructor(currentId=0){
        this.tasks = [] 
        this.currentId = currentId         
    }


    addTask(name,description,assignedTo,dueDate,staTus)
{

    let newTask= {
        Id :this.currentId++,
        name : name,
        description: description,
        assignedTo : assignedTo,
        dueDate : dueDate,
        staTus : 'TODO',
    }
    console.Log(this.tasks.push(newTask));
}
}

let task1 = new TaskManager(currentId=1);
task1.name= 'john';
task1.description = 'task';
task1.assignedTo = 'name1';
task1.dueDate = 'today';
task1.staTus = 'TODO';
console.log(task1.name, task1.description, task1.assignedTo, task1.dueDate, task1.staTus);

//console.log(task1.addTask(task1.name,task1.description,task1.assignedme2,task1.dueDate,task1.staTus));
//console.log(task1.addTask);


