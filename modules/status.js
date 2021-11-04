// imports 
import { taskArr } from "./storage.js";
///////////////////
// button states //
///////////////////
export default class Status {
    static toggleStates(obj, todo) { // when check mark is clicked toggle class
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        let position = taskArr.findIndex(({ id }) => id === obj.id);
        /*
        let position = taskArr.indexOf(obj);
        position === -1 ? position = taskArr.length - 1 : taskArr.indexOf(obj);   
        console.log(position);
        */
        if(obj.status === 'incomplete') {
            obj.status ='complete'; 
            taskArr[position].status = 'complete'; 
            todo.classList.add('complete');  
        } else {
            obj.status = 'incomplete'; 
            taskArr[position].status = 'incomplete'; 
            todo.classList.remove('complete'); 
        }
        localStorage.setItem('tasks', JSON.stringify(taskArr));
        this.saveStates(); 
    }
    static saveStates() { // when check mark is clicked save state 
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        const arr = [];
        for(let i = 0; i < taskArr.length; i++) {
            arr.push(taskArr[i].status);
        }
        localStorage.setItem('states', JSON.stringify(arr));
    }
    static createStates(taskArr) { // when page loads 
        const statesArr = this.createStatesArray(taskArr);
        this.displayStates(statesArr); 
    }
    static createStatesArray(taskArr) { // when page loads 
        const arr = [];
        for(let i = 0; i < taskArr.length; i++) {
            arr.push(taskArr[i].status)
        }
        localStorage.setItem('states', JSON.stringify(arr)); 
        return arr; 
    }
    static displayStates(statesArr) { // when page loads 
        // display states
        const todoItems = [...document.querySelectorAll('.task-items')];
        for(let i = 0; i < statesArr.length; i++) {
            if(statesArr[i] === 'complete') {
                todoItems[i].classList.add('complete');   
            } else {
                todoItems[i].classList.remove('complete');
            }
        }
    }
}

/*
static checkBtnStates(todo, arr, id) {
        if(arr[id] === 'incomplete') {
            arr.splice(id, 1, 'complete'); 
            todo.classList.add('complete');  
            localStorage.setItem('status', JSON.stringify(arr)); 
        } else {
            arr.splice(id, 1, 'incomplete');
            todo.classList.remove('complete');  
            localStorage.setItem('status', JSON.stringify(arr)); 
        }
    }
    static filterStatus(str) {
        const indexArr = this.findStatusIndex(str);
        let statusArr = JSON.parse(localStorage.getItem('status'));
        this.deleteStatusFromLocal(statusArr, indexArr); 
    }
    static findStatusIndex(str) {
        const indexArr = [];
        for(let i = 0; i < taskArr.length; i++) {
            if(taskArr[i].project === str) {
                indexArr.push(i);  
            }
        }
        return indexArr;
    }
    static deleteStatusFromLocal(statusArr, arr) {
        let i = arr.length;
        while(i--) {
            statusArr.splice(arr[i], 1); 
        }
        localStorage.setItem('status', JSON.stringify(statusArr));
    }
    static addStatus() {
        let statusArr = JSON.parse(localStorage.getItem('status')); 
        if(statusArr !== null) {
            statusArr.push('incomplete');
            localStorage.setItem('status', JSON.stringify(statusArr)); 
        } 
        else {
            statusArr = [];
            statusArr.push('incomplete');
            localStorage.setItem('status', JSON.stringify(statusArr)); 
        }
    } 
    static deleteStatus(trashBtn) {
        const statusArr = JSON.parse(localStorage.getItem('status'));
        const index = trashBtn.parentNode.id;
        statusArr.splice(index, 1);
        localStorage.setItem('status', JSON.stringify(statusArr)); 
    }
*/