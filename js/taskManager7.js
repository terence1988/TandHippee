//taskManager input
class TaskManager{
    constructor(currentId=0){
        this.tasks = [] 
        this.currentId = currentId         
    }

// add new task
    addTask(name,description,assignedTo,dueDate)
{

    let newTask= {
        Id :this.currentId++,
        name : name,
        description: description,
        assignedTo : assignedTo,
        dueDate : dueDate,
    //Change status to "inProgree"
        staTus : "In Progress",
    }
    console.log(this.tasks.push(newTask));

}
    //Update task
    getTaskById(taskId) {
        let updateTask;
        for (let i =0; i<this.tasks.length; i++){
            const task = this.tasks[i];
            if (task.id === taskId){
                updateTask = task;
            };
        };
        return updateTask;
    };
//display tasks on card
    render(){
        const tasksHtmlList = [];
        for (let i=0; i<this.tasks.length; i++){
            const task = this.tasks[i];

    const due = new Date(task.dueDate);
    //format date dd/mm/yy 
    const formattedDate = due.getDate() + '/' + (due.getMonth()+1) + '/' 
    + (due.getFullYear());

    const taskHtml = createTaskHtml(task.name,task.description,task.assignedTo,formattedDate,task.staTus);
    tasksHtmlList.push(taskHtml);
    }//closed render for loop
    const tasksHtml = tasksHtmlList.join('\n');
    
    const tasksList = document.querySelector('#taskCard');
    tasksList.innerHTML = tasksHtml;
} //closed render
}; //closed class

   /* const list = document.createElement('ul');
    list.className = 'list-group';
   */
//added Task on cards 
const createTaskHtml = (name,description,assignedTo,dueDate,staTus) =>
{
   return `
   <li class="list-group-item mt-2">
   <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
   <h5>Task Number${name}</h5>
   
   </div>
   <div class="d-flex w-100 mb-3 justify-content-between">
   <small>AssignedTo: ${assignedTo}</small>
  
   <small>task Description: ${description}</small>
  
    </div>
   <div class="d-flex w-100 mt-3 justify-content-between align-items-center">
   <small>Due Date: ${dueDate}</small>
    <span class="badge ${staTus === 'In Progress' ? 'badge-danger' : 'badge-success'}">${staTus}</span>
   <button class="btn btn-outline-success done-button ${staTus === 'Completed' ? 'invisible' : 'visible'}">Done</button>
   </div>
   </li>
 `; 
   
}
   
   /*list.innerHTML = `
  <div class="card-body">
    <h5 class="card-title">${newTask.name}</h5>
    <span class="badge badge-primary">${newTask.description}</span>
    <p class="card-text">${newTask.assignedTo}</p>
    <p class="card-text">${formattedDate}</p>
    <p class="card-text">${staTus}</p>
    <button class="btn btn-outline-success done-button ${staTus ==="completed" ? "visible" : "invisible"}">Done</a>
    <a href="#" class="btn btn-primary">Delete</a>
  </div>
`;
*/
//card.appendChild(list);





