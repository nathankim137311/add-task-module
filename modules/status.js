// imports 
///////////////////
// button states //
///////////////////
// modify later
const statusArr = []; 
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
        statusArr.push('incomplete');
        localStorage.setItem('status', JSON.stringify(statusArr)); 
    } 
}