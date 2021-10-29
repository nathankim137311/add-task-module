// imports 
import Utility, { Iterators } from "./utility.js";
//////////////////////////
// event listener class //
//////////////////////////
export default class Event {
    // form buttons // 
    // adds task
    static addBtn() {
        const addBtn = document.getElementById('add-btn'); 
        addBtn.addEventListener('click', (e) => { 
            e.preventDefault(); 
            Utility.createNewTask(); 
            Utility.checkProject(); 
            Iterators.createIterators(); 
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

/*
 // when link is clicked populates container with tasks
 static relevantTasks() {
    const projectLink = document.getElementById('project-link'); 
    projectLink.addEventListener('click', (e) => {
        const projectName = e.target.textContent; 
        const projectNameH2 = document.getElementById('project-name'); 
        projectNameH2.textContent = projectName.toUpperCase(); 
        replaceProjectList(projectName);
    });
}
*/