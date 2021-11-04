// imports
import Storage from "./storage.js";
import { taskArr } from "./storage.js";
// task class 
export default class Task {
    constructor(title, description, project, priority) {
        this.id = JSON.parse(localStorage.getItem('id')) + 1; // added unique identifier; 
        this.title = title;
        this.description = description;
        this.project = project; 
        this.priority = priority;
        this.status = 'incomplete'; 
        Task.addTask(this);
        Task.saveTask(); 
        Task.saveId(this.id);
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
    static saveId(id) {
        const newId = id;
        localStorage.setItem('id', JSON.stringify(newId));  
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
// Task.currentId = 0; 

