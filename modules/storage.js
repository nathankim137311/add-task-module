// imports
import UI from "./ui.js";
// arrays
export let taskArr = []
export let projectArr = [];
///////////////////////////
// save to local storage //
///////////////////////////
export default class Storage {
    // sets object to local storage 
    static saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(taskArr));
    }
    static saveProjects() {
        localStorage.setItem('projects', JSON.stringify(projectArr));
    }
    static saveAll() {
        localStorage.setItem('tasks', JSON.stringify(taskArr));
        localStorage.setItem('projects', JSON.stringify(projectArr)); 
    }
    // load items if local storage is not empty (false)
    static loadItemsFromStorage() {
        if(this.checkItemsFromStorage() === false) {
            this.loadProjects();
            this.loadTasks();
        }
    }
    // returns false if there are items in local storage 
    static checkItemsFromStorage() {
        if(localStorage.getItem('projects') === null && localStorage.getItem('tasks') === null) {
            projectArr = [];
            taskArr = [];
            return true 
        } else {
            return false
        }
    }
    static loadProjects() {
        if(localStorage.getItem('projects') === null) {
            projectArr = []; 
        } else {
            projectArr = JSON.parse(localStorage.getItem('projects'));
            this.createItemsFromStorage(projectArr); 
        }
    }
    static loadTasks() {
        if(localStorage.getItem('tasks') === null) {
            taskArr = []; 
        } else {
            taskArr = JSON.parse(localStorage.getItem('tasks'));
            this.createItemsFromStorage(taskArr); 
        }
    }
    static loadBtnStates() {
        const statusArr = JSON.parse(localStorage.getItem('status'));
        const todo = [...document.querySelectorAll('.task-items')];
        if(statusArr !== null) {
            for(let i = 0; i < todo.length; i++) {
                if(statusArr[i] === 'complete') {
                    todo[i].classList.add('complete'); 
                } 
            }
        }
    }
    static createItemsFromStorage(arr) {
        switch(arr) {
            case projectArr:
                for(let i = 0; i < arr.length; i++) {
                    UI.createProjectListDom(arr[i]); 
                }
                break; 
            case taskArr:
                for(let i = 0; i < arr.length; i++) {
                    UI.createTaskDom(arr[i]); 
                }
                break;
        }
    }
}