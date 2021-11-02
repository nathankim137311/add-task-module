// imports
import Counter from "./counter.js";
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
    static createStatesFromLocal(statusArr) {
        const todo = [...document.querySelectorAll('.task-items')];
        if(statusArr !== null) {
            for(let i = 0; i < todo.length; i++) {
                if(statusArr[i] === 'complete') {
                    todo[i].classList.add('complete'); 
                } 
            }
        }
    }
    static createCountersFromLocal(counterArr) {
        // create items from local 
        Counter.addCountersToList(counterArr); 
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
        if(localStorage.getItem('status') === null) {
            statusArr = []; 
        } else {
            statusArr = JSON.parse(localStorage.getItem('status'));
            Storage.createStatesFromLocal(statusArr);
        }
    }
    static counters() {
        if(localStorage.getItem('counters') === null) {
            counterArr = [];
        } else {
            counterArr = JSON.parse(localStorage.getItem('counters'));
            Storage.createCountersFromLocal(counterArr); 
        }
    }
}