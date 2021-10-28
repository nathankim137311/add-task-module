// imports
import Storage from "./storage.js";
// task array 
export const taskArr = []
// task class 
export default class Task {
    constructor(title, project, priority) {
        this.title = title;
        this.project = project; 
        this.priority = priority;
        Task.addTask(this);
        Task.saveTask(); 
    }
    static addTask(item) {
        taskArr.push(item);
    }
    static saveTask() {
        Storage.saveTasks()
    }
    static getTasks() {
        return taskArr
    }
}

/*
// testing 
let task = new Tasks(); 
task.newTasks('homework', 'school', 'low'); 
task.newTasks('workout', 'gym', 'high'); 
console.log(task.allTasks);
*/

