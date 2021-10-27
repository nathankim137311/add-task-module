// individual task 
export default class Task {
    constructor(title, project, priority, dueDate) {
        this.title = title;
        this.project = project; 
        this.priority = priority;
        this.dueDate = dueDate; 
    }
}
// all tasks 
export class Tasks {
    constructor() {
        this.tasks = [];
    }
    newTasks(title, project, priority) {
        let taskObj = new Task(title, project, priority);
        this.tasks.push(taskObj);
        return taskObj; 
    }
    get allTasks() {
        return this.tasks;
    }
}

/*
// testing 
let task = new Tasks(); 
task.newTasks('homework', 'school', 'low'); 
task.newTasks('workout', 'gym', 'high');
task.saveTasks; 
console.log(task.allTasks);
*/

