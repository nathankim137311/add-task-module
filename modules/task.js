// imports
import Storage from "./storage.js";
import { taskArr } from "./storage.js";
// task class 
export default class Task {
    constructor(title, description, project, priority) {
        this.title = title;
        this.description = description;
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

