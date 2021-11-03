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
        this.status = 'incomplete'; 
        Task.addTask(this);
        Task.saveTask(); 
    }
    // You should be referencing a private variable in the context of the getter and setter prefix each variable with an underscore
    /*
    get status() {
        return this._status
    }
    set status(value) {
        this._status = value; 
    }
    */
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

