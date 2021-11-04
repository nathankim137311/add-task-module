// imports 
///////////////////
// button states //
///////////////////
export default class Status {
    static toggleStates(obj, todo) { // when check mark is clicked toggle class
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        let position = taskArr.findIndex(({ id }) => id === obj.id);
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
    static displayStates(arr) { // when page loads 
        const todoItems = [...document.querySelectorAll('.task-items')];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === 'complete') {
                todoItems[i].classList.add('complete');   
            } else {
                todoItems[i].classList.remove('complete');
            }
        }
    }
    static filteredStates(project) { // creates states from filtered list
        const todoItems = [...document.querySelectorAll('.task-items')];
        for(let i = 0; i < project.length; i++) {
            if(project[i].status === 'complete') {
                todoItems[i].classList.add('complete');
            } else {
                todoItems[i].classList.remove('complete');
            }
        }
    }
}
