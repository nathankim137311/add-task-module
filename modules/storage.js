// imports
import Counter from "./counter.js";
import Status from "./status.js";
import UI from "./ui.js";
// arrays
export let taskArr = [];
export let projectArr = [];
export let statusArr = []; 
export let counterArr = []; 
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
    static createStatesFromLocal(taskArr) {
        Status.createStates(taskArr);
    }
    static createCountersFromLocal() {
        Counter.updateCounters(); 
    }
}
export class Load extends Storage {
    static itemsFromStorage() {
        this.projects();
        this.tasks();
        this.states(); 
        this.counters();
    }
    static projects() {
        if(localStorage.getItem('projects') === null) {
            projectArr = []; 
        } else {
            projectArr = JSON.parse(localStorage.getItem('projects'));
            Storage.createItemsFromStorage(projectArr); 
        }
    }
    static tasks() {
        if(localStorage.getItem('tasks') === null) {
            taskArr = []; 
        } else {
            taskArr = JSON.parse(localStorage.getItem('tasks'));
            Storage.createItemsFromStorage(taskArr); 
        }
    }
    static states() {
        if(localStorage.getItem('tasks') === null) {
            taskArr = []; 
        } else {
            taskArr = JSON.parse(localStorage.getItem('tasks'));
            Storage.createStatesFromLocal(taskArr);
        }
    }
    static counters() {
        if(localStorage.getItem('counters') === null) {
            counterArr = [];
        } else {
            counterArr = JSON.parse(localStorage.getItem('counters'));
            Storage.createCountersFromLocal(); 
        }
    }
    /*
    static id() {
        if(localStorage.getItem('id') === null) {
            const id = 0; 
            localStorage.setItem('id', JSON.stringify(id));
        } 
    }
    */
}