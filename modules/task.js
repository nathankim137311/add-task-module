// imports
import Storage from "./storage.js";
import { taskArr } from "./storage.js";
// task class 
export default class Task {
    constructor(title, description, project, priority, date) {
        this.id = JSON.parse(localStorage.getItem('id')) + 1; // added unique identifier; 
        this.title = title;
        this.description = description;
        this.project = project; 
        this.priority = priority;
        this.date = date; 
        this.status = 'incomplete'; 
        Task.addTask(this);
        Task.saveTask(); 
        Task.saveId(this.id);
    }
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

