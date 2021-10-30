// imports 
import { taskArr } from "./storage.js";
import UI from "./ui.js";
import Utility, { Counter } from "./utility.js";
//////////////////////////
// event listener class //
//////////////////////////
export default class Event {
    static allTasksLink() {
        const allTasksLink = document.getElementById('all-tasks-link');
        allTasksLink.addEventListener('click', () => {
            UI.clearTaskList(); 
            taskArr.forEach(task => {
                UI.createTaskDom(task);
            });
        }); 
    }
    // form buttons // 
    static addBtn() {
        const addBtn = document.getElementById('add-btn'); 
        addBtn.addEventListener('click', (e) => { 
            e.preventDefault(); 
            Utility.createNewTask(); 
            Utility.checkProject(); 
            Counter.updateCounters(); 
        });
    }
    // opens pop-up form 
    static taskBtn() {
        const taskBtn = document.getElementById('task-btn');
        taskBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            document.getElementById('myForm').style.display = 'block'; 
            }); 
    }
    // closes pop-up form 
    static closeBtn() {
        const closeBtn = document.getElementById('close-btn');
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            document.getElementById('myForm').style.display = 'none';
            });
    }
}