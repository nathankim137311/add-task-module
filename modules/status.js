// imports 
import { taskArr } from "./storage.js";
///////////////////
// button states //
///////////////////
export default class Status {
    static toggleStates(obj, todo) {
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        let position = taskArr.indexOf(obj);
        position === -1 ? position = 0 : taskArr.indexOf(obj);   
        if(obj.status === 'incomplete') {
            obj.status ='complete'; 
            taskArr[position].status = 'complete'; 
            todo.classList.add('complete');  
        } else {
            obj.status = 'incomplete'; 
            taskArr[position].status = 'incomplete'; 
            todo.classList.remove('complete');  
        }
        this.saveStates(taskArr);  
    }
    static saveStates(taskArr) {
        /*
        for(let i = 0; i < taskArr.length; i++) {
            const arr = JSON.parse(localStorage.getItem('status'));
            arr.push(obj.status); 
        }
        const statusArr = localStorage.setItem('status', JSON.stringify(arr));
        */
        const newTaskArr = localStorage.setItem('tasks', JSON.stringify(taskArr));
    }
    static createStates(taskArr) {
        console.log(taskArr)
        const statesArr = this.createStatesArray(taskArr);
        this.displayStates(statesArr); 
    }
    static createStatesArray(taskArr) {
        const arr = [];
        console.log(taskArr.length);
        for(let i = 0; i < taskArr.length; i++) {
            arr.push(taskArr[i].status)
        }
        localStorage.setItem('states', JSON.stringify(arr)); 
        return arr; 
    }
    static displayStates(statesArr) {
        // display states
        console.log(statesArr);
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