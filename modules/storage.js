// imports
import UI from "./ui.js";
import ButtonStates from "./btn.js";
// arrays
export let taskArr = []
export let projectArr = [];
export let btnStatesArr = []; 
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
    // modify later 
    static loadBtnStates() {
        btnStatesArr = JSON.parse(localStorage.getItem('btn-states'));
        const todo = Array.from(document.getElementsByClassName('tasks'));
        if(btnStatesArr !== null) {
            for(let i = 0; i < btnStatesArr.length; i++) {
                if(btnStatesArr[i] === 'complete') {
                    todo[i].classList.add('complete');
                } else {
                    todo[i].classList.remove('complete'); 
                }
            }
        } else {
            for(let i = 0; i < taskArr.length; i++) {
                btnStatesArr = []
                btnStatesArr.push('incomplete');
                localStorage.setItem('btn-states', JSON.stringify(btnStatesArr)); 
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
    /*
    static btnStates() {
        if(localStorage.getItem('status') === null) {
            for(let i = 0; i < taskArr.length; i++) {
                btnStatesArr.push('incomplete');
                localStorage.setItem('status', JSON.stringify(btnStatesArr)); 
            }  
        } else {
            localStorage.getItem('status').split(',');
        }
        console.log(btnStatesArr);
    }
    */
}