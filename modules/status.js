// imports 
///////////////////
// button states //
///////////////////
// modify later
let statusArr = []; 
export default class Status {
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
    static addBtnState() {
        let statusArr = JSON.parse(localStorage.getItem('status')); 
        if(statusArr !== null) {
            statusArr = JSON.parse(localStorage.getItem('status')); 
            statusArr.push('incomplete');
            localStorage.setItem('status', JSON.stringify(statusArr)); 
        } else {
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
}