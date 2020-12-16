//taskManager input
class TaskManager{
    constructor(currentId=0){
        this.tasks = [] 
        this.currentId = currentId         
    }


    addTask(name,description,assignedTo,dueDate)
{

    let newTask= {
        Id :this.currentId++,
        name : name,
        description: description,
        assignedTo : assignedTo,
        dueDate : dueDate,
        staTus : "TODO",
    }
    console.log(this.tasks.push(newTask));
    //display taskListin table form
    const list = document.querySelector('#taskList');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${newTask.name}</td>
                    <td>${newTask.description}</td>
                    <td>${newTask.assignedTo}</td>
                    <td>${newTask.dueDate}</td>
                    <td>${newTask.staTus}</td>
                    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
                  `; 
    list.appendChild(row);

}
};

