// individual task 
export default class Task {
    constructor(title, project, priority) {
        this.title = title;
        this.project = project; 
        this.priority = priority;
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
console.log(task.allTasks);
*/

