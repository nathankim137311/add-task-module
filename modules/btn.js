// imports 
///////////////////
// button states //
///////////////////
// modify later
const btnStatesArr = []; 
export default class ButtonStates {
    static checkBtnStates(todo, arr, id) {
        if(arr[id] === 'incomplete') {
            arr.splice(id, 1, 'complete'); 
            todo.classList.add('complete');  
            localStorage.setItem('btn-states', JSON.stringify(arr)); 
        } else {
            arr.splice(id, 1, 'incomplete');
            todo.classList.remove('complete');  
            localStorage.setItem('btn-states', JSON.stringify(arr)); 
        }
    }
    static addBtnState() {
        btnStatesArr.push('incomplete');
        localStorage.setItem('btn-states', JSON.stringify(btnStatesArr)); 
    } 
    /*
    static checkBtns() {
        if()
        btnStatesArr.push('incomplete');
        localStorage.setItem('btn-states', JSON.stringify(btnStatesArr));
    }
    */
}